import AnimatedSection from '@/components/AnimatedSection'
import Layout from '@/components/layout/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/theme'
import '../styles/globals.css'
import '@fontsource-variable/jetbrains-mono'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatedSection>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatedSection>
    </ChakraProvider>
  )
}

export default MyApp
