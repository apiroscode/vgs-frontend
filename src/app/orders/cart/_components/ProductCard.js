import React, { useState } from "react";

import { useDocumentDataOnce } from "react-firebase-hooks/firestore";

import { makeStyles, IconButton, Typography, InputBase, Divider } from "@material-ui/core";

import { firestore } from "@/config/firebase";
import { reTotalOrder } from "@/utils";
import { useNotify } from "@/utils/hooks";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "64px 1fr",
    gap: theme.spacing(1) + "px",
    padding: theme.spacing(1),
  },
  image: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    border: `1px solid ${theme.palette.divider}`,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
  },
  infoName: {
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: ".03em",
  },
  brandName: {
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: ".03em",
    color: theme.palette.grey[500],
  },
  qtyContainer: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    border: `1px solid ${theme.palette.divider}`,
    marginRight: theme.spacing(0.5),
    padding: theme.spacing(0.5),
    "& > input": {
      padding: "0 !important",
    },
  },
  price: {
    fontSize: "18px",
    fontWeight: 500,
    color: theme.palette.secondary.dark,
    marginBottom: theme.spacing(1),
  },
  deleteIcon: {
    color: theme.palette.error.main,
  },
  divider: { margin: theme.spacing(0, 0.5) },
}));

const ProductCard = ({ orderId, product }) => {
  const notify = useNotify();
  const classes = useStyles();
  const { id, name, brand, price, images, qty } = product;
  const [newQty, setNewQty] = useState(qty);
  const [loading, setLoading] = useState(false);

  const image = images ? images[0] : "https://via.placeholder.com/300x300";

  const [brandData] = useDocumentDataOnce(firestore.collection("brands").doc(brand));
  const brandName = brandData?.name;

  const handleChange = async () => {
    if (qty === newQty) {
      return;
    }

    setLoading(true);
    try {
      const orderRef = firestore.collection("orders").doc(orderId);
      await orderRef.collection("items").doc(id).update({ qty: newQty });
      await reTotalOrder(orderId);
    } catch (e) {
      notify.error(e?.message);
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const orderRef = firestore.collection("orders").doc(orderId);
      await orderRef.collection("items").doc(id).delete();
      await reTotalOrder(orderId);
    } catch (e) {
      notify.error(e?.message);
    }
  };

  return (
    <div className={classes.container}>
      <img className={classes.image} src={image} alt="" />
      <div className={classes.infoContainer}>
        <Typography className={classes.infoName}>{name}</Typography>
        <Typography gutterBottom className={classes.brandName}>
          {brandName}
        </Typography>
        <Typography className={classes.price}>$ {price}</Typography>
        <div className={classes.qtyContainer}>
          <InputBase
            className={classes.input}
            type="number"
            value={newQty}
            onChange={(e) => setNewQty(parseInt(e.target.value))}
            inputProps={{ min: 0 }}
            disabled={loading}
          />
          <IconButton size="small" color="secondary" onClick={handleChange} disabled={loading}>
            <EditOutlined />
          </IconButton>
          <Divider orientation="vertical" flexItem className={classes.divider} />
          <IconButton
            size="small"
            color="primary"
            className={classes.deleteIcon}
            disabled={loading}
            onClick={handleDelete}
          >
            <DeleteOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
