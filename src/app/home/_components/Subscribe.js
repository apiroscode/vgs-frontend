import React from "react";

import { makeStyles, Typography } from "@material-ui/core";
import { EmailOutlined } from "@material-ui/icons";

import subscribe from "@/components/_assets/subscribe.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    placeItems: "center",
    color: "#fff",
    backgroundImage: `url('${subscribe}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: theme.spacing(24),
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(32),
    },
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
  },
  input: {
    background: "#fff",
    marginBottom: theme.spacing(1),
  },
  mail: {
    fontSize: theme.spacing(5),
    marginBottom: theme.spacing(1),
  },
  buttonGroup: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}));

const Subscribe = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <EmailOutlined className={classes.mail} />
        <Typography variant="body1">Subscribe for Our Newsletter</Typography>
        <Typography variant="body2">
          Learn about new offers and get more deals by joining our newsletter
        </Typography>
        <div className={classes.buttonGroup}>
          <input placeholder="Enter your email" type="email" />
          <button>SUBSCRIBE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
