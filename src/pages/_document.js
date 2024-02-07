import { Head, Html, Main, NextScript } from 'next/document'
import GoogleAnalytics from '../components/GoogleAnalytics'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
