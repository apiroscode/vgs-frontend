import React from "react";
import { Typography, makeStyles, Container } from "@material-ui/core";

import brand1 from "@/components/_assets/brand-1.png";
import brand2 from "@/components/_assets/brand-2.png";
import brand3 from "@/components/_assets/brand-3.png";
import brand4 from "@/components/_assets/brand-4.png";
import brand5 from "@/components/_assets/brand-5.png";
import brand6 from "@/components/_assets/brand-6.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gap: theme.spacing(3) + "px",
    marginTop: theme.spacing(4),
  },
  title: {
    margin: "0 auto",
  },
  imageContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
    justifyItems: "center",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(6, 1fr)",
    },
  },
}));

const Brands = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" disableGutters>
      <div className={classes.container}>
        <Typography variant="h5" className={classes.title}>
          Our Brands
        </Typography>
        <div className={classes.imageContainer}>
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand4} alt="" />
          <img src={brand5} alt="" />
          <img src={brand6} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Brands;
