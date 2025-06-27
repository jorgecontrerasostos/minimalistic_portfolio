import AnimatedSection from '@/components/AnimatedSection'
import Layout from '@/components/layout/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { TranslationProvider } from '../context/TranslationContext'

import '../styles/globals.css'
import theme from '../theme/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <TranslationProvider>
        <AnimatedSection>
          <Layout>
            <Component {...pageProps} />
            <Analytics />
            <SpeedInsights />
          </Layout>
        </AnimatedSection>
      </TranslationProvider>
    </ChakraProvider>
  )
}

export default MyApp
