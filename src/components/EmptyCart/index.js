import React from "react";

import { makeStyles, Typography } from "@material-ui/core";
import { RemoveShoppingCartOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  noItems: { display: "grid", placeItems: "center", height: "100%" },
  noItemsContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& > svg": {
      marginBottom: theme.spacing(1),
    },
  },
}));

const EmptyCart = () => {
  const classes = useStyles();

  return (
    <div className={classes.noItems}>
      <div className={classes.noItemsContainer}>
        <RemoveShoppingCartOutlined fontSize="large" />
        <Typography variant="h6">YOUR CART IS EMPTY</Typography>
      </div>
    </div>
  );
};

export default EmptyCart;
