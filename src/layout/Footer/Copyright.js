import React from "react";

import { makeStyles, Typography } from "@material-ui/core";
import payments from "@/components/_assets/payments.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    color: theme.palette.grey[400],
    "& > span": {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      "& > span": {
        marginBottom: 0,
      },
    },
  },
}));

const Copyright = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography component="span" variant="body2">
        Copyright © 2020 VGS ONLINE. All Rights Reserved.
      </Typography>
      <img src={payments} alt="supported payments" />
    </div>
  );
};

export default Copyright;
