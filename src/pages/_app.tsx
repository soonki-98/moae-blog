import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme";
import { SessionProvider } from "next-auth/react";
import React, { useEffect } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import deviceAtom from "../recoil/deviceAtom";
import searchBarAtom from "../recoil/searchBarAtom";

const GlobalRecoilStateWrapper = ({ children }: { children: React.ReactNode }) => {
  const setDevice = useSetRecoilState(deviceAtom);
  const isSearchBarOpen = useRecoilValue(searchBarAtom);

  useEffect(() => {
    if (window.document.documentElement.clientWidth <= 568) setDevice("mobile");
    else setDevice("desktop");
  }, []);

  useEffect(() => {
    if (isSearchBarOpen) window.document.documentElement.style.overflow = "hidden";
    else window.document.documentElement.style.overflow = "auto";
  }, [isSearchBarOpen]);

  return <div>{children}</div>;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SessionProvider session={pageProps.session}>
          <RecoilRoot>
            <GlobalRecoilStateWrapper>
              <Component {...pageProps} />
            </GlobalRecoilStateWrapper>
          </RecoilRoot>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
