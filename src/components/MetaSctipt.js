import React from "react";
import { Helmet } from "react-helmet-async";
import favicon from "../assets/favicon.ico";
import main from "../assets/main.png";
const MetaScript = () => {
  return (
    <Helmet>
      <title>Ratflix - 클론</title>
      <link rel="icon" href={favicon} />
      <meta name="description" content="Ratflix" />
      <meta name="keywords" content="Ratflix" />
      <meta property="og:type" content="Ratflix" />
      <meta property="og:title" content="영화" />
      <meta property="og:descriptoin" content="영화입니다" />
      <meta property="og:image" content={main} />
      <meta name="twitter:title" content="Ratflix" />
      <meta name="twitter:description" content="Ratflix" />
      <meta name="twitter:image" content={main} />
      <meta name="twitter:card" content="Ratflix" />
    </Helmet>
  );
};

export default MetaScript;
