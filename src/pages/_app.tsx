import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
