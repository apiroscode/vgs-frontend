import React, { useContext } from "react";

import { useMediaQuery, useTheme } from "@material-ui/core";

import { StoreContext } from "@/config/store";

import { Desktop, Mobile } from "@/components/ResponsiveDrawer";

import { Form } from "./_components";

const Shipping = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { cart, isOpenShipping, onCloseCart, onClosePayment, onCloseShipping } = useContext(
    StoreContext
  );

  const handleClose = () => {
    onCloseShipping();
    onCloseCart();
    onClosePayment();
  };

  return isDesktop ? (
    <Desktop
      cart={cart}
      title="SHIPPING ADDRESS"
      isOpen={isOpenShipping}
      handleClose={handleClose}
    >
      <Form cart={cart} />
    </Desktop>
  ) : (
    <Mobile cart={cart} title="SHIPPING ADDRESS" isOpen={isOpenShipping} handleClose={handleClose}>
      <Form cart={cart} />
    </Mobile>
  );
};

export default Shipping;
