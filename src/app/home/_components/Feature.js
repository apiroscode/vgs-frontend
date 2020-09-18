import React from "react";

import { useCollectionData } from "react-firebase-hooks/firestore";

import { Container, makeStyles } from "@material-ui/core";

import { firestore } from "@/config/firebase";
import { maybe } from "@/utils";

import { ProductCard, TitleBar } from "@/components";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(4, 0),
    display: "grid",
    gap: theme.spacing(2) + "px",
  },
  productContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(2) + "px",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
}));

const Feature = ({ title = "Feature" }) => {
  const [productsData] = useCollectionData(firestore.collection("products").limit(8), {
    idField: "id",
  });
  const classes = useStyles();
  const products = maybe(() => productsData, []);

  return (
    <Container maxWidth="lg">
      <div className={classes.container}>
        <TitleBar>{title}</TitleBar>
        <div className={classes.productContainer}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Feature;
