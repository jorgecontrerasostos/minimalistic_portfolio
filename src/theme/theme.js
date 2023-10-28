import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  colors: {
    light: {
      background: 'white' // Light mode background color
    },
    dark: {
      background: 'black', // Dark mode background color
      overriddenBackground: '#11151C' // Override the dark mode background color
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
