import "../styles/globals.scss";
import type { AppProps } from "next/app";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

// Fonts and themeing
import Fonts from "components/Fonts";
import theme from "components/Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
