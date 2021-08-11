import React from "react";
import { render, hydrate } from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "swiper/swiper.scss";
import { ApiProvider } from "./Context/ApiContext";
import ResponsiveStyles from "./styles/ResponsiveStyles";
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <HelmetProvider>
        <ApiProvider>
          <ThemeProvider theme={theme}>
            <ResponsiveStyles>
              <App />
            </ResponsiveStyles>
          </ThemeProvider>
          <GlobalStyles />
        </ApiProvider>
      </HelmetProvider>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <HelmetProvider>
        <ApiProvider>
          <ThemeProvider theme={theme}>
            <ResponsiveStyles>
              <App />
            </ResponsiveStyles>
          </ThemeProvider>
          <GlobalStyles />
        </ApiProvider>
      </HelmetProvider>
    </React.StrictMode>,
    rootElement
  );
}
