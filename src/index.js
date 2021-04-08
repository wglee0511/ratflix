import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "swiper/swiper.scss";
import { ApiProvider } from "./Context/ApiContext";

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      <GlobalStyles />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
