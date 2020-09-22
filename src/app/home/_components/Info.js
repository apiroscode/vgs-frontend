import React from "react";

import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  InfoOutlined,
  LiveHelpOutlined,
  LocalShippingOutlined,
  ReplayOutlined,
} from "@material-ui/icons";

import info1 from "@/components/_assets/info-1.png";
import info2 from "@/components/_assets/info-2.png";

const useStyles = makeStyles((theme) => ({
  wrapper: { background: "#fff", marginTop: theme.spacing(3), padding: theme.spacing(3, 0, 6) },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(2) + "px",
    justifyItems: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "1fr 1fr",
    },
  },
  image: {
    width: "100%",
    height: 200,
    // height: 0,
    // padding: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  infoContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    padding: theme.spacing(2),
    gap: theme.spacing(2) + "px",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 0,
      "&>*:not(:last-child)": {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    },
  },
  info: {
    display: "flex",
    alignItems: "center",
    "& > svg": {
      fontSize: theme.spacing(4),
      margin: theme.spacing(2),
    },
  },
}));

const Info = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container maxWidth="lg">
        <div className={classes.container}>
          <div className={classes.image} style={{ backgroundImage: `url('${info1}')` }} />
          <div className={classes.image} style={{ backgroundImage: `url('${info2}')` }} />
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.info}>
            <LocalShippingOutlined />
            <div>
              <Typography variant="body1">Free Shipping</Typography>
              <Typography variant="body2" color="textSecondary">
                Free shipping for all items
              </Typography>
            </div>
          </div>
          <div className={classes.info}>
            <ReplayOutlined />
            <div>
              <Typography variant="body1">Free Returns</Typography>
              <Typography variant="body2" color="textSecondary">
                Within 30 days
              </Typography>
            </div>
          </div>
          <div className={classes.info}>
            <InfoOutlined />
            <div>
              <Typography variant="body1">Get 20% Off 1 Item</Typography>
              <Typography variant="body2" color="textSecondary">
                Orders Rp 500.000 or more
              </Typography>
            </div>
          </div>
          <div className={classes.info}>
            <LiveHelpOutlined />
            <div>
              <Typography variant="body1">We Support</Typography>
              <Typography variant="body2" color="textSecondary">
                24/7 amazing services
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Info;
