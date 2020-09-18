import React from "react";

import { useLocation } from "react-router-dom";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import queryString from "query-string";

import { Container, makeStyles, Typography } from "@material-ui/core";

import { firestore } from "@/config/firebase";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    placeItems: "center",
    height: "100%",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid",
    padding: theme.spacing(4),
  },
  titleMain: {
    textTransform: "uppercase",
    letterSpacing: "0.03em",

    "& span": {
      color: theme.palette.secondary.main,
    },
  },
}));
const PaymentSuccess = () => {
  const classes = useStyles();
  const location = useLocation();
  const { order_id } = queryString.parse(location.search);
  const [order] = useDocumentDataOnce(firestore.collection("orders").doc(order_id));
  return order ? (
    <Container maxWidth="lg">
      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <Typography gutterBottom variant="h5" className={classes.titleMain}>
            PAYMENT SUCCESS <span>($ {order.totalAmount})</span>
          </Typography>
          <Typography variant="h6">
            {order.name} - {order.email}
          </Typography>
        </div>
      </div>
    </Container>
  ) : null;
};

export default PaymentSuccess;
