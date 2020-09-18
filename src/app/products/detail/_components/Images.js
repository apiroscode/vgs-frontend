import React, { useState } from "react";

import clsx from "clsx";

import { makeStyles } from "@material-ui/core";

import { maybe } from "@/utils";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gap: theme.spacing(2) + "px",
    gridTemplateRows: "1fr auto",
    [theme.breakpoints.up("md")]: {
      gridTemplateRows: "1fr",
      gridTemplateColumns: "auto 1fr",
    },
  },
  thumbContainer: {
    order: 1,
    display: "grid",
    gap: theme.spacing(2) + "px",
    gridTemplateColumns: "repeat(3, 1fr)",
    [theme.breakpoints.up("md")]: { gridTemplateColumns: "1fr" },
  },
  thumb: {
    height: 100,
    width: 100,
    // paddingBottom: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    opacity: "80%",
    transition: ".2s opacity ease",
    "&:hover": {
      opacity: "100%",
    },
  },
  thumbSelected: {
    border: `1px solid ${theme.palette.primary.light}`,
    opacity: "100%",
  },
  image: {
    height: 0,
    paddingBottom: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    order: 0,
    [theme.breakpoints.up("md")]: {
      order: 1,
    },
  },
}));

const Images = ({ images: imagesRaw }) => {
  const classes = useStyles();

  const images = maybe(() => imagesRaw, ["https://via.placeholder.com/300x300"]);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className={classes.container}>
      <div className={classes.thumbContainer}>
        {images.map((image) => (
          <div
            key={image}
            className={clsx({
              [classes.thumb]: true,
              [classes.thumbSelected]: image === selectedImage,
            })}
            style={{ backgroundImage: `url('${image}')` }}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <div className={classes.image} style={{ backgroundImage: `url('${selectedImage}')` }} />
    </div>
  );
};

export default Images;
