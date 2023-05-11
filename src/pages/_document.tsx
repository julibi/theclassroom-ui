import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>TheRetreat.</title>
        <meta charSet="utf-8" />
        <meta property="og:locale" content="en_US" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="A high-end space sanatorial retreat program to upgrade your inner self. 3 months in a space capsule rotating around planet earth. Literary NFTs, collaborative writing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="TheRetreat" />
        <meta property="og:title" content="Literary NFTs" />
        <meta
          property="og:description"
          content="A high-end space sanatorial retreat program to upgrade your inner self. 3 months in a space capsule rotating around planet earth. Literary NFTs, collaborative writing."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://www.orbitretreat.xyz/website.png"
        />
        <meta property="og:url" content="https://www.orbitretreat.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
