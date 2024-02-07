import AnimatedSection from '@/components/AnimatedSection'
import Layout from '@/components/layout/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'
import theme from '../theme/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatedSection>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </AnimatedSection>
    </ChakraProvider>
  )
}

export default MyApp
