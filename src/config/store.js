import React, { useCallback, useEffect, useState } from "react";
import { firestore } from "@/config/firebase";
import { useOpen } from "@/utils/hooks";

export const StoreContext = React.createContext({});

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(localStorage.getItem("orderId") || null);
  const [isOpenCart, onOpenCart, onCloseCart, onToggleCart] = useOpen();
  const [isOpenShipping, onOpenShipping, onCloseShipping, onToggleShipping] = useOpen();
  const [isOpenPayment, onOpenPayment, onClosePayment, onTogglePayment] = useOpen();

  const setOrderId = useCallback((orderId) => {
    if (orderId === null) {
      localStorage.removeItem("orderId");
      setCart(null);
    } else {
      localStorage.setItem("orderId", orderId);
    }
    setCurrentOrder(orderId);
  }, []);

  useEffect(() => {
    const checkOrder = async () => {
      if (currentOrder) {
        const order = await firestore.collection("orders").doc(currentOrder).get();
        if (!order.exists) {
          setOrderId(null);
          setCart(null);
        }
      }
    };
    checkOrder();
  }, [currentOrder, setOrderId]);

  return (
    <StoreContext.Provider
      value={{
        currentOrder,
        setOrderId,
        isOpenCart,
        onOpenCart,
        onCloseCart,
        onToggleCart,
        cart,
        setCart,
        isOpenShipping,
        onOpenShipping,
        onCloseShipping,
        onToggleShipping,
        isOpenPayment,
        onOpenPayment,
        onClosePayment,
        onTogglePayment,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
