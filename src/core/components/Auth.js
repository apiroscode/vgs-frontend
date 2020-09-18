import React from "react";
import { Outlet } from "react-router-dom";

import { FullPage } from "@/layout";

const Auth = () => {
  return (
    <FullPage>
      <Outlet />
    </FullPage>
  );
};

export default Auth;
