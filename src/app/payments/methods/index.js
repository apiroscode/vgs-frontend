import React, { useContext } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { StoreContext } from "@/config/store";
import { Desktop, Mobile } from "@/components/ResponsiveDrawer";
import Methods from "./Methods";

const PaymentMethods = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { cart, isOpenPayment, onCloseCart, onClosePayment, onCloseShipping } = useContext(
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
      title="CHOOSE PAYMENT METHODS"
      isOpen={isOpenPayment}
      handleClose={handleClose}
    >
      <Methods cart={cart} />
    </Desktop>
  ) : (
    <Mobile
      cart={cart}
      title="CHOOSE PAYMENT METHODS"
      isOpen={isOpenPayment}
      handleClose={handleClose}
    >
      <Methods cart={cart} />
    </Mobile>
  );
};

export default PaymentMethods;
