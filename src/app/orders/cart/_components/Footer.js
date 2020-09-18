import React, { useContext } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { AccountBalanceOutlined } from "@material-ui/icons";
import { StoreContext } from "@/config/store";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 2),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  total: {
    textAlign: "right",
    fontWeight: "bold",
    marginBottom: theme.spacing(1.5),
    "& > span": {
      color: theme.palette.secondary.main,
    },
  },
}));

const Footer = ({ cart }) => {
  const classes = useStyles();
  const { onCloseCart, onOpenShipping, onClosePayment } = useContext(StoreContext);
  const { totalAmount } = cart;

  const handleClick = () => {
    onCloseCart();
    onClosePayment();
    onOpenShipping();
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.total} variant="h6">
        TOTAL: <span>$ {totalAmount}</span>
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        startIcon={<AccountBalanceOutlined />}
        onClick={handleClick}
      >
        Pay Now
      </Button>
    </div>
  );
};

export default Footer;
