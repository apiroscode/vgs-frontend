import React from "react";

import NukaCarousel from "nuka-carousel";
import { Link } from "react-router-dom";

import { Container, makeStyles, Typography, Button } from "@material-ui/core";

import carousel1 from "@/components/_assets/carousel-1.jpg";
import carousel2 from "@/components/_assets/carousel-2.jpg";

const useStylesImageContainer = makeStyles((theme) => ({
  container: ({ image }) => ({
    backgroundImage: `url('${image}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: theme.spacing(40),
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(50),
    },
  }),
}));

const ImageContainer = ({ image, ...restProps }) => {
  const classes = useStylesImageContainer({ image });

  return <div className={classes.container} {...restProps} />;
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginLeft: theme.spacing(4),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(16),
    },
  },
  highlight: {
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(1),
    borderRadius: 4,
    textTransform: "uppercase",
    transform: "skewX(-11deg)",
    letterSpacing: ".03em",
    fontWeight: theme.typography.fontWeightMedium,
    width: "max-content",
    marginBottom: theme.spacing(2),
  },
  description: {
    color: "#fff",
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: "6px",
    maxWidth: "60%",
    ...theme.typography.h6,
    [theme.breakpoints.up("md")]: {
      ...theme.typography.h5,
      letterSpacing: "6px",
      maxWidth: "80%",
    },

    "& span": {
      color: theme.palette.secondary.light,
    },
  },
  button: {
    marginTop: theme.spacing(2),
    color: "#fff",
    fontWeight: theme.typography.fontWeightMedium,
    width: "max-content",
  },
}));

const Carousel = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" disableGutters>
      <NukaCarousel
        autoplay
        wrapAround
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
      >
        <ImageContainer image={carousel1}>
          <div className={classes.container}>
            <Typography className={classes.highlight}>Cleareance</Typography>
            <Typography className={classes.description}>
              POWER TOOL UP TO <span>30% OFF</span>
            </Typography>
            <Button
              component={Link}
              to="/"
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              Discover Now
            </Button>
          </div>
        </ImageContainer>
        <ImageContainer image={carousel2}>
          <div className={classes.container}>
            <Typography className={classes.highlight}>Deal of the day</Typography>
            <Typography className={classes.description}>
              <span>Up to</span> 20% <span>OFF</span> HEAVY DUTY DEALS
            </Typography>
            <Button
              component={Link}
              to="/"
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              Discover Now
            </Button>
          </div>
        </ImageContainer>
      </NukaCarousel>
    </Container>
  );
};

export default Carousel;
