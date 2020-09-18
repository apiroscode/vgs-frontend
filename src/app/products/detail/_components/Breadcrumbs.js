import React from "react";

import { Link as RouteLink } from "react-router-dom";

import { Link, Typography, Breadcrumbs as MUIBreadcrumbs } from "@material-ui/core";

const Breadcrumbs = ({ productName }) => {
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      <Link component={RouteLink} color="inherit" to="/">
        Home
      </Link>
      <Link component={RouteLink} color="inherit" to="/products">
        Products
      </Link>
      <Typography color="textPrimary">{productName}</Typography>
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
