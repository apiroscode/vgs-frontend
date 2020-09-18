import React, { useContext, useEffect } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";

import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

import { StoreContext } from "@/config/store";
import { firestore } from "@/config/firebase";

const BadgeWithCurrentOrder = ({ currentOrder }) => {
  const [order] = useDocumentData(firestore.collection("orders").doc(currentOrder));
  const { onOpenCart, setCart, setOrderId } = useContext(StoreContext);

  useEffect(() => {
    const setC = async () => {
      const allItems = await firestore
        .collection("orders")
        .doc(currentOrder)
        .collection("items")
        .get();

      const items = await Promise.all(
        allItems.docs.map(async (item) => {
          const { qty } = item.data();
          const product = await firestore.collection("products").doc(item.id).get();
          const { price } = product.data();
          return { id: item.id, qty, total: qty * price, ...product.data() };
        })
      );

      setCart({
        id: currentOrder,
        items,
        ...order,
      });
    };
    if (order) {
      if (order.status) {
        setOrderId(null);
        setCart(null);
      } else {
        setC();
      }
    }
  }, [order, setCart, setOrderId, currentOrder]);

  return (
    <IconButton color="secondary" onClick={onOpenCart}>
      <Badge badgeContent={order ? order.totalQty : 0} color="error">
        <ShoppingCartOutlined />
      </Badge>
    </IconButton>
  );
};

const Cart = () => {
  const { currentOrder, onOpenCart } = useContext(StoreContext);

  return currentOrder ? (
    <BadgeWithCurrentOrder currentOrder={currentOrder} />
  ) : (
    <IconButton color="secondary" onClick={onOpenCart}>
      <ShoppingCartOutlined />
    </IconButton>
  );
};

export default Cart;
