import React, { useContext } from "react";
import { makeStyles, Typography, IconButton } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import { StoreContext } from "@/config/store";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: "bold",
    letterSpacing: "0.05em",
  },
}));

const Header = () => {
  const classes = useStyles();
  const { onCloseCart } = useContext(StoreContext);
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h6">
        MY CARTS
      </Typography>
      <IconButton size="small" onClick={onCloseCart}>
        <CloseOutlined />
      </IconButton>
    </div>
  );
};

export default Header;
