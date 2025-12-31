import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'JetBrains Mono', 'Courier New', monospace`,
    body: `'JetBrains Mono', 'Courier New', monospace`,
  },
  colors: {
    light: {
      background: "#FFFFF",
    },
    dark: {
      background: "black",
      overriddenBackground: "00000",
      text: "white",
    },
    customSwitchColors: {
      100: "#E0F7FA",
      200: "#B2EBF2",
      300: "#80DEEA",
      400: "#4DD0E1",
      500: "#26C6DA",
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
