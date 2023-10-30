import AnimatedSection from '@/components/AnimatedSection'
import Layout from '@/components/layout/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/theme'
import '../styles/globals.css'
import { DM_Sans } from '@next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '700'] })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} className={dmSans.className}>
      <AnimatedSection>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatedSection>
    </ChakraProvider>
  )
}

export default MyApp
