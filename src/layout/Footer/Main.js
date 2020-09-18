import React from "react";

import { Link } from "react-router-dom";

import { Avatar, makeStyles, Typography } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

import Logo from "@/components/_assets/logo-box.svg";

const useStyles = makeStyles((theme) => ({
  container: { display: "grid", gap: theme.spacing(2) + "px" },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
    textDecoration: "none",
    "& > img": {
      marginRight: theme.spacing(1.5),
      maxHeight: theme.spacing(4),
    },
    "& > span": {
      fontWeight: theme.typography.fontWeightBold,
      letterSpacing: theme.spacing(1),
    },
  },
  description: {
    color: theme.palette.grey[400],
  },
  iconContainer: {
    display: "flex",
    "& *:not(:last-child)": {
      marginRight: theme.spacing(2),
    },
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <img src={Logo} alt="" />
        <Typography variant="h6" component="span">
          VGS
        </Typography>
      </div>
      <Typography variant="body2" className={classes.description}>
        Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna
        eros eu erat.
      </Typography>
      <div className={classes.iconContainer}>
        <Avatar component={Link} to="/">
          <Facebook />
        </Avatar>
        <Avatar component={Link} to="/">
          <Instagram />
        </Avatar>
        <Avatar component={Link} to="/">
          <Twitter />
        </Avatar>
      </div>
    </div>
  );
};

export default Main;
