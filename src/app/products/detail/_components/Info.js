import React from "react";

import { useDocumentDataOnce } from "react-firebase-hooks/firestore";

import { Divider, makeStyles, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import { firestore } from "@/config/firebase";
import { maybe } from "@/utils";

import { AddToCart } from ".";

const useStyles = makeStyles((theme) => ({
  infoContainer: { marginBottom: theme.spacing(3) },
  productName: {
    textTransform: "uppercase",
    letterSpacing: ".03em",
  },
  price: {
    color: theme.palette.secondary.dark,
    "& > span": {
      color: theme.palette.divider,
      textDecoration: "line-through",
    },
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ratingReview: {
    marginLeft: theme.spacing(1),
  },
}));

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Info = ({ product }) => {
  const classes = useStyles();
  const { name, price, crossOutPrice, brand } = product;
  const [brandData] = useDocumentDataOnce(firestore.collection("brands").doc(brand));
  const brandName = maybe(() => brandData.name, "");

  return (
    <div>
      <div className={classes.infoContainer}>
        <Typography gutterBottom variant="h5" className={classes.productName}>
          {name}
        </Typography>
        <div className={classes.ratingContainer}>
          <Rating value={randomIntFromInterval(3, 5)} readOnly size="small" />
          <Typography
            component="span"
            variant="caption"
            color="textSecondary"
            className={classes.ratingReview}
          >
            ({randomIntFromInterval(1, 100)} Reviews)
          </Typography>
        </div>
        <Typography variant="h5" className={classes.price}>
          Rp {price} {crossOutPrice && <span>Rp {crossOutPrice}</span>}
        </Typography>
        <AddToCart product={product} />
      </div>
      <Divider />
      <Typography variant="subtitle2" color="textSecondary">
        Brand: {brandName}
      </Typography>
    </div>
  );
};

export default Info;
