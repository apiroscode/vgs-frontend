import React from "react";

import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  barContainer: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
  },
  title: {
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    textTransform: "uppercase",
  },
}));

const TitleBar = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.barContainer}>
      <Typography component="span" className={classes.title} variant="h6">
        {children}
      </Typography>
    </div>
  );
};

export default TitleBar;
