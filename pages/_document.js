import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
        <title>Longterm earnings</title>
        <meta property="og:title" content="Longterm earnings" key="title" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/site.webmanifest" />
        <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name='description' content='How to earn passive income during a long term period? How to manage your long term investment? The long term earnings blog give you insights!'/>   
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument