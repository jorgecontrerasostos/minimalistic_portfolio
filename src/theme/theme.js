import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  fonts: {
    heading: `'JetBrains Mono', sans-serif`,
    body: `'JetBrains Mono', sans-serif`
  },
  colors: {
    light: {
      background: '#F7F7FF' // Light mode background color
    },
    dark: {
      background: 'black', // Dark mode background color
      overriddenBackground: '#070600' // Override the dark mode background color
    },
    customSwitchColors: {
      100: '#13B0CF',
      200: '#13B0CF'
    }
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('light.background', 'dark.overriddenBackground')(props), // Use overridden background color for dark mode
        color: mode('black', 'white')(props)
      }
    })
  }
})
export default theme
