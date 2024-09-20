import { extendTheme } from "@chakra-ui/react"; // Make sure this is included
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `IBM Plex Sans, Inter, sans-serif`,
    body: `IBM Plex Sans, Inter, sans-serif`,
  },
  colors: {
    light: {
      background: "#FFFFF", // Light mode background color
    },
    dark: {
      background: "black", // Dark mode background color
      overriddenBackground: "00000",
      text: "white",
    },
    customSwitchColors: {
      100: "#E0F7FA",
      200: "#B2EBF2",
      300: "#80DEEA",
      400: "#4DD0E1",
      500: "#26C6DA", // This is the key used by default for the colorScheme
      600: "#00ACC1",
      700: "#0097A7",
      800: "#00838F",
      900: "#006064",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("light.background", "dark.overriddenBackground")(props),
        color: mode("black", "white")(props),
      },
    }),
  },
});

export default theme;
