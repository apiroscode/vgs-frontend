import React from "react";

import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "@/config/theme";

import { StoreProvider } from "@/config/store";

import { Routes } from "./routes";
import { ScrollToTop } from "./components";

const Core = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            autoHideDuration={2000}
            preventDuplicate
          >
            <StoreProvider>
              <Routes />
            </StoreProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Core;
