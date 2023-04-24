import { Html, Head, Main, NextScript } from "next/document";
// import img1 from "../public/images/tanaji_img.jpeg";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Portfolio</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href="public/images/tanaji_img.jpeg"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <body className="bg-gradient-to-r from-green to-blue-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
