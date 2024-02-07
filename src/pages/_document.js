import { GoogleAnalytics } from '@next/third-parties/google'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <GoogleAnalytics gaId='G-CRDC850GFQ' />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
