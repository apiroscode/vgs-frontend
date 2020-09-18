import React from "react";

import { useParams } from "react-router-dom";
import { useDocumentData } from "react-firebase-hooks/firestore";

import { Container, makeStyles, Typography } from "@material-ui/core";

import { firestore } from "@/config/firebase";

import { Breadcrumbs, Images, Info } from "./_components";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2, 0, 4),
  },
  content: {
    marginTop: theme.spacing(2),
    display: "grid",
    gap: theme.spacing(2) + "px",
    gridTemplateColumns: "1fr",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "1fr 1fr",
    },
  },
  description: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(2),
  },
}));

const ProductDetail = () => {
  const { id } = useParams();
  const classes = useStyles();
  const [product] = useDocumentData(firestore.collection("products").doc(id), {
    idField: "id",
  });

  return product ? (
    <Container maxWidth="lg">
      <div className={classes.container}>
        <Breadcrumbs productName={product.name} />
        <div className={classes.content}>
          <Images images={product?.images} />
          <Info product={product} />
        </div>
        <div className={classes.description}>
          <Typography gutterBottom variant="h6">
            Description:
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
        </div>
      </div>
    </Container>
  ) : null;
};

export default ProductDetail;
