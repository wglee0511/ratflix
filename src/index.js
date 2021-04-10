import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "swiper/swiper.scss";
import { ApiProvider } from "./Context/ApiContext";
import ResponsiveStyles from "./styles/ResponsiveStyles";



ReactDOM.render(
  <React.StrictMode>
    <ApiProvider>
      <ThemeProvider theme={theme}>

      <ResponsiveStyles>
        <App />

      </ResponsiveStyles>
     
      </ThemeProvider>
      <GlobalStyles />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
