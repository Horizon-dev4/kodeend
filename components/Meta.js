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
        {/* slider stylesheet */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css"
        />
        {/* bootstrap core css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/bootstrap.css"
        />
        {/* fonts style */}
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap"
          rel="stylesheet"
        />
        {/* Custom styles for this template */}
        <link href="/assets/css/style.css" rel="stylesheet" />
        {/* responsive style */}
        <link href="/assets/css/responsive.css" rel="stylesheet" />
      </Head>
    </>
  );
};

export default Meta;
