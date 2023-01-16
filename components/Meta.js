import Head from "next/head";
import React from "react";

const Meta = () => {
  return (
    <>
      <Head>
        {/* Basic */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Mobile Metas */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Site Metas */}
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Kodeend</title>
        {/* favicon adding */}
        <link rel="shortcut icon" href="/assets/images/favicon.png" title="Favicon" />
      </Head>
    </>
  );
};

export default Meta;
