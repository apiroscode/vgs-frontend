import React from "react";

import { Link as RouterLink } from "react-router-dom";

import { Link as MaterialLink, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
  },
  linkContainer: {
    display: "grid",
    gap: theme.spacing(1) + "px",
  },
  link: {
    color: theme.palette.grey[400],
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.light,
      textDecoration: "none",
    },
  },
}));

const Link = ({ link: { title, links } }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title}>{title}</Typography>
      <div className={classes.linkContainer}>
        {links.map((link, idx) => (
          <MaterialLink component={RouterLink} key={idx} to={link.url} className={classes.link}>
            {link.title}
          </MaterialLink>
        ))}
      </div>
    </div>
  );
};

export default Link;
