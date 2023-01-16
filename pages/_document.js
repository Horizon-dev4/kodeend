import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* slider stylesheet */}
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css"
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
