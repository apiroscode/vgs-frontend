import React from "react";

import { Link as RouteLink } from "react-router-dom";

import { Breadcrumbs as MUIBreadcrumbs, Link } from "@material-ui/core";

const Breadcrumbs = () => {
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      <Link component={RouteLink} color="inherit" to="/">
        Home
      </Link>
      <Link component={RouteLink} color="inherit" to="/products">
        Products
      </Link>
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
