import React from "react";

import { makeStyles } from "@material-ui/core";

import { Carousel, Brands, Feature, Subscribe, Info } from "./_components";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
  },
  main: {
    background: "#fff",
    padding: theme.spacing(0, 0, 6),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2, 0, 8),
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <Carousel />
        <Brands />
      </div>
      <Feature />
      <Subscribe />
      <Info />
      <Feature title="Popular Products" />
    </div>
  );
};

export default Home;
