import React from "react";
import { Helmet } from "react-helmet-async";

const MetaScript = () => {
  return (
    <Helmet>
      <title>Ratflix - 클론</title>
      <link rel="icon" href="../assets/favicon.ico" />
      <meta
        property="og:image"
        content="https://image.flaticon.com/icons/png/512/60/60580.png"
      />
      <meta property="og:description" content="Ratflix" />
    </Helmet>
  );
};

export default MetaScript;
