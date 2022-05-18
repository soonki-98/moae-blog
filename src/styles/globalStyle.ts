import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: #f8f9fa;
}

#__next {
  padding: 0 6rem;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
`;

export default GlobalStyle;
