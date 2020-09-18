import React, { useContext, useState } from "react";

import { Button, makeStyles, TextField } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import { StoreContext } from "@/config/store";
import { firestore } from "@/config/firebase";
import { useNotify } from "@/utils/hooks";
import { reTotalOrder } from "@/utils";

const useStyles = makeStyles((theme) => ({
  quantity: { margin: theme.spacing(2, 0) },
}));

const AddToCart = ({ product }) => {
  const notify = useNotify();
  const [loading, setLoading] = useState(false);
  const { currentOrder, setOrderId } = useContext(StoreContext);

  const classes = useStyles();
  const [qty, setQty] = useState(1);

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      let orderRef;
      if (currentOrder) {
        orderRef = await firestore.doc(`/orders/${currentOrder}`);
      } else {
        orderRef = await firestore.collection("orders").add({});
        setOrderId(orderRef.id);
      }

      await orderRef
        .collection("items")
        .doc(product.id)
        .set({ qty: parseInt(qty) });

      await reTotalOrder(orderRef.id);

      notify.success(`${product.name} added ${qty} to the basket`);
    } catch (e) {
      notify.error(e?.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <TextField
        label="Quantity"
        variant="outlined"
        value={qty}
        type="number"
        inputProps={{
          min: 1,
        }}
        onChange={(e) => setQty(e.target.value)}
        className={classes.quantity}
        size="small"
      />
      <div>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          startIcon={<AddShoppingCart />}
          disabled={loading}
          onClick={handleAddToCart}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default AddToCart;
