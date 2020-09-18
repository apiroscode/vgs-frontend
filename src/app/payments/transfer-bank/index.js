import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";

import { Container, Divider, makeStyles, Typography } from "@material-ui/core";

import { firestore } from "@/config/firebase";
import { StoreContext } from "@/config/store";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    placeItems: "center",
    height: "100%",
    padding: theme.spacing(2),
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    border: "1px solid",
    padding: theme.spacing(4),
  },
  titleMain: {
    textTransform: "uppercase",
    letterSpacing: "0.03em",
    borderBottom: `1px solid ${theme.palette.divider}`,
    "& span": {
      color: theme.palette.secondary.main,
    },
  },
  content: {
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  divider: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
}));
const PaymentSuccess = () => {
  const classes = useStyles();
  const [idr, setIdr] = useState(1);
  const { orderId } = useParams();
  const [order] = useDocumentDataOnce(firestore.collection("orders").doc(orderId));
  const { setOrderId } = useContext(StoreContext);

  useEffect(() => {
    const set = async () => {
      setOrderId(null);
      const responseRates = await fetch(
        "https://api.exchangeratesapi.io/latest?base=USD&symbols=IDR"
      );
      const responseRatesOK = responseRates && responseRates.ok;
      if (responseRatesOK) {
        const rates = await responseRates.json();
        setIdr(rates?.rates?.IDR);
      }
    };
    set();
  }, [setOrderId]);

  return order ? (
    <Container maxWidth="lg">
      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <Typography gutterBottom variant="h5" className={classes.titleMain}>
            PLEASE TRANSFER TO (CIMB):
          </Typography>

          <div className={classes.content}>
            <Typography variant="body2">Customer Name:</Typography>
            <Typography variant="body1">VIE GLOBAL SEJAHTERA</Typography>
          </div>
          <div className={classes.content}>
            <Typography variant="body2">Account No:</Typography>
            <Typography variant="body1">800167834500</Typography>
          </div>
          <div className={classes.content}>
            <Typography variant="body2">Branch Code:</Typography>
            <Typography variant="body1">20320 - Bogor - Juanda</Typography>
          </div>
          <div className={classes.content}>
            <Typography variant="body2">Product Code:</Typography>
            <Typography variant="body1">CAGSME0001</Typography>
          </div>
          <div className={classes.content}>
            <Typography variant="body2">Product Description:</Typography>
            <Typography variant="body1">Giro Usaha Perusahaan</Typography>
          </div>
          <Divider className={classes.divider} />
          <div className={classes.content}>
            <Typography variant="body2">TOTAL:</Typography>
            <Typography variant="h6" color="secondary">
              $ {order.totalAmount} / IDR {Math.floor(order.totalAmount * idr).toLocaleString()}
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  ) : null;
};

export default PaymentSuccess;
