import React from "react";

import { makeStyles, Container, Divider } from "@material-ui/core";

import Main from "./Main";
import Link from "./Link";
import Copyright from "./Copyright";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: theme.shadows[24],
    color: "#fff",
    padding: theme.spacing(4, 0),
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(2) + "px",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
  divider: {
    backgroundColor: theme.palette.grey[400],
    margin: theme.spacing(6, 0, 2),
  },
}));

const footerLink = [
  {
    title: "USEFUL LINKS",
    links: [
      { title: "About VGS", url: "/" },
      { title: "How to shop on VGS", url: "/" },
      { title: "FAQ", url: "/" },
      { title: "Contact us", url: "/" },
      { title: "Log in", url: "/" },
    ],
  },
  {
    title: "CUSTOMER SERVICE",
    links: [
      { title: "Payment Methods", url: "/" },
      { title: "Money-back guarantee!", url: "/" },
      { title: "Returns", url: "/" },
      { title: "Shipping", url: "/" },
      { title: "Terms and conditions", url: "/" },
      { title: "Privacy Policy", url: "/" },
    ],
  },
  {
    title: "MY ACCOUNT",
    links: [
      { title: "Sign In", url: "/" },
      { title: "View Cart", url: "/" },
      { title: "My Whishlist", url: "/" },
      { title: "Track My Order", url: "/" },
      { title: "Help", url: "/" },
    ],
  },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.container}>
          <Main />
          {footerLink.map((link, idx) => (
            <Link key={idx} link={link} />
          ))}
        </div>
        <Divider className={classes.divider} />
        <Copyright />
      </Container>
    </div>
  );
};

export default Footer;
