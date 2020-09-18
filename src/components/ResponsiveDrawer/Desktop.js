import React from "react";

import { Dialog, DialogContent, DialogTitle, makeStyles } from "@material-ui/core";
import { EmptyCart } from "@/components";

const useStyles = makeStyles((theme) => ({
  content: {
    marginBottom: theme.spacing(3),
  },
}));
const Desktop = ({ title, children, isOpen, handleClose, cart }) => {
  const classes = useStyles();
  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      {cart && cart.items.length > 0 ? (
        <>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent className={classes.content}>{children}</DialogContent>
        </>
      ) : (
        <DialogContent>
          <EmptyCart />
        </DialogContent>
      )}
    </Dialog>
  );
};

export default Desktop;
