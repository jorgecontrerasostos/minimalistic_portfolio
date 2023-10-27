import AnimatedSection from '@/components/AnimatedSection'
import Layout from '@/components/layout/Layout'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AnimatedSection>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatedSection>
    </ChakraProvider>
  )
}

export default MyApp
