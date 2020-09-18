import React from "react";

import { Container, makeStyles } from "@material-ui/core";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "@/config/firebase";
import { maybe } from "@/utils";
import Breadcrumbs from "./Breadcrumbs";
import { ProductCard } from "@/components";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2, 0, 6),
  },
  content: {
    marginTop: theme.spacing(2),
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

const ProductList = () => {
  const classes = useStyles();
  const [productsRaw] = useCollectionData(firestore.collection("products"), { idField: "id" });
  const products = maybe(() => productsRaw, []);

  return (
    <Container maxWidth="lg">
      <div className={classes.container}>
        <Breadcrumbs />
        <div className={classes.content}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductList;
