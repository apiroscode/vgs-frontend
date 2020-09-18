import React, { useContext } from "react";

import { makeStyles, SwipeableDrawer } from "@material-ui/core";

import { StoreContext } from "@/config/store";

import { ProductList, Header, Footer } from "./_components";
import { EmptyCart } from "@/components";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    [theme.breakpoints.up("md")]: { width: theme.spacing(40) },
    display: "grid",
    gap: theme.spacing(2) + "px",
    "&>*:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
}));

const OrderCart = () => {
  const classes = useStyles();
  const { isOpenCart, onOpenCart, onCloseCart, cart } = useContext(StoreContext);
  return (
    <SwipeableDrawer onClose={onCloseCart} onOpen={onOpenCart} open={isOpenCart} anchor="right">
      <Header />
      <div className={classes.container}>{cart ? <ProductList cart={cart} /> : <EmptyCart />}</div>
      {cart && cart.items.length > 0 && <Footer cart={cart} />}
    </SwipeableDrawer>
  );
};

export default OrderCart;
