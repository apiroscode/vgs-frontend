import React from "react";

import { Drawer, makeStyles, Typography } from "@material-ui/core";
import { EmptyCart } from "@/components";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  title: {
    textAlign: "center",
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const Mobile = ({ title, children, isOpen, handleClose, cart }) => {
  const classes = useStyles();

  return (
    <Drawer anchor="bottom" open={isOpen} onClose={handleClose}>
      <div className={classes.container}>
        {cart && cart.items.length > 0 ? (
          <>
            <Typography variant="h5" className={classes.title}>
              {title}
            </Typography>
            {children}
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </Drawer>
  );
};

export default Mobile;
