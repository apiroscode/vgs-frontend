import React from "react";

import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  CardActionArea,
} from "@material-ui/core";

import { firestore } from "@/config/firebase";
import { maybe } from "@/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
  content: {
    display: "grid",
    gap: theme.spacing(0.5) + "px",
    alignItems: "center",
    justifyItems: "center",
  },
  price: {
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold,
    "& span": {
      color: theme.palette.grey[400],
      textDecoration: "line-through",
    },
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const { id, name, brand, price, crossOutPrice, images } = product;
  const [brandData] = useDocumentDataOnce(firestore.collection("brands").doc(brand));
  const brandName = maybe(() => brandData.name, "");
  const image = maybe(() => images[0], "https://via.placeholder.com/300x300");

  return (
    <Card>
      <CardActionArea component={Link} to={`/products/${id}`}>
        <CardMedia className={classes.media} image={image} title="name" />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary">
            {brandName}
          </Typography>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1" className={classes.price}>
            Rp {price.toLocaleString()}{" "}
            {crossOutPrice ? <span> Rp {crossOutPrice.toLocaleString()}</span> : null}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
