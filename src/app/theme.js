import { extendTheme } from "@chakra-ui/react";
import { TextStyle as Text } from "./TextStyles";
import { ButtonStyle as Button } from "./ButtonStyles";

export const theme = extendTheme({
  components: {
    Text,
    Button,
  },
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    primary: {
      dark: "#f0f",
      light: "snow",
    },
    primary2: {
        dark: "#59008c",
        light: "snow",
      },
    secondary: "purple",
    text: {
      dark: "#000",
      light: "snow",
    },
    icon: "lime",
  },

  /*
  styles: {
    global: () => ({
      body: {
        bg: {
            primary: {
                dark: "#f0f",
                light: "snow",
              },
              secondary: "purple",
        },
      },
    }),
  },*/
});
