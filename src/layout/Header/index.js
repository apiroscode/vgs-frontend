import React from "react";

import { Link } from "react-router-dom";

import { AppBar, Container, makeStyles, Toolbar, Typography } from "@material-ui/core";

import Logo from "@/components/_assets/logo-box.svg";

import Menu from "./Menu";
import Cart from "./Cart";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
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
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container maxWidth="lg">
          <div className={classes.container}>
            <Menu />
            <Link to="/" className={classes.logoContainer}>
              <img src={Logo} alt="" />
              <Typography variant="h6" component="span">
                VGS
              </Typography>
            </Link>
            <Cart />
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
