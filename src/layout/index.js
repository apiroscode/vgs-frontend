import React from "react";

import { Outlet } from "react-router-dom";

import { makeStyles } from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";

import OrderCart from "@/app/orders/cart";
import Shipping from "@/app/orders/shipping";
import PaymentMethods from "@/app/payments/methods";

const useStyles = makeStyles(() => ({
  layout: {
    display: "grid",
    minHeight: "100vh",
    gridTemplateRows: "auto 1fr auto",
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Header />
      <Outlet />
      <Footer />
      <OrderCart />
      <Shipping />
      <PaymentMethods />
    </div>
  );
};

export default Layout;
