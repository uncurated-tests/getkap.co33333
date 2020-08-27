import Document, { Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="An open-source screen recorder built with web technology" />
          <meta name="keywords" content="Kap,capture,record,screen,aspect,ratio,HD,FPS,60FPS" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:title" content="Kap - Capture your screen" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://getkap.co/" />
          <meta property="og:image" content="https://getkap.co/static/images/ogp/kap-ogp-v3-large.png" />
          <meta property="og:description" content="An open-source screen recorder built with web technology" />
          <meta property="og:site_name" content="Kap" />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@wulkanocom" />
          <meta name="twitter:title" content="Kap" />
          <meta name="twitter:description" content="An open-source screen recorder built with web technology" />
          <meta name="twitter:image" content="https://getkap.co/static/images/ogp/kap-ogp-v3-twitter.png" />

          <link rel="shortcut icon" href="/static/favicon/kap.ico" />
          <link rel="apple-touch-icon" href="/static/favicon/icon-128.png" />
          <link rel="icon" href="/static/favicon/icon-32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/static/favicon/icon-256.png" sizes="256x256" />
          <link rel="icon" type="image/png" href="/static/favicon/icon-128.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="/static/favicon/icon-32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/static/favicon/icon-16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/static/favicon/icon-128.png" sizes="128x128" />
          <link rel="mask-icon" href="/static/favicon/kap.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
