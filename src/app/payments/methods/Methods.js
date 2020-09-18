import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, makeStyles } from "@material-ui/core";

import { StoreContext } from "@/config/store";

import MidtransIcon from "@/components/_icons/Midtrans";
import CimbIcon from "@/components/_icons/Cimb";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gap: theme.spacing(2) + "px",
  },
}));

const Methods = ({ cart }) => {
  const { onClosePayment } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);
  const { id, totalAmount, email, phone } = cart;
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = async (method) => {
    setLoading(true);
    let idr = 0;
    const responseRates = await fetch(
      "https://api.exchangeratesapi.io/latest?base=USD&symbols=IDR"
    );
    const responseRatesOK = responseRates && responseRates.ok;
    if (responseRatesOK) {
      const rates = await responseRates.json();
      idr = rates?.rates?.IDR || idr;
    }

    if (method === "midtrans") {
      const snapUrl = "https://vgs-payment.herokuapp.com/midtrans";
      // const snapUrl = "http://localhost:8000/midtrans";
      const response = await fetch(snapUrl, {
        method: "POST",
        body: JSON.stringify({
          order_id: id,
          gross_amount: Math.floor(totalAmount * idr),
          email: email || "",
          phone: phone || "",
        }),
      });
      const responseOK = response && response.ok;
      if (responseOK) {
        const data = await response.json();
        const { redirect_url } = data;
        window.open(redirect_url);
      }
    } else if (method === "cimb") {
      onClosePayment();
      navigate(`/payment-methods/transfer-bank/${id}`);
    }
    setLoading(false);
  };

  return (
    <div className={classes.container}>
      {/*<Button*/}
      {/*  variant="contained"*/}
      {/*  startIcon={<StripeIcon />}*/}
      {/*  onClick={() => handleClick("stripe")}*/}
      {/*  disabled={loading}*/}
      {/*>*/}
      {/*  Stripe Payment*/}
      {/*</Button>*/}
      <Button
        variant="contained"
        startIcon={<MidtransIcon />}
        onClick={() => handleClick("midtrans")}
        disabled={loading}
      >
        Midtrans Payment
      </Button>
      <Button
        variant="contained"
        startIcon={<CimbIcon />}
        onClick={() => handleClick("cimb")}
        disabled={loading}
      >
        CIMB Bank Transfer
      </Button>
    </div>
  );
};

export default Methods;
