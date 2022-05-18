import { ThemeType } from "../types/theme";

const theme: ThemeType = {
  COLORS: {
    MAINDARK: "rgb(31, 22, 15)",
    MAIN: "rgb(60, 47, 37)",
  },
  FONT: {
    HEAD1: {
      fontWeight: "bold",
      fontSize: "44px",
      "line-height": 1.3,
    },
    HEAD2: {
      fontWeight: "bold",
      fontSize: "36px",
      "line-height": 1.3,
    },
    HEAD3: {
      fontWeight: "bold",
      fontSize: "28px",
      "line-height": 1.3,
    },
    HEAD4: {
      fontWeight: "500",
      fontSize: "24px",
      "line-height": 1.3,
    },
    HEAD5: {
      fontWeight: "500",
      fontSize: "20px",
      "line-height": 1.3,
    },
    HEAD6: {
      fontWeight: "500",
      fontSize: "16px",
      "line-height": 1.3,
    },
    NORMAL: {
      fontWeight: "regular",
      fontSize: "16px",
      "line-height": 1.7,
    },
    SMALL: {
      fontWeight: "regular",
      fontSize: "12px",
      "line-height": 1.7,
    },
  },
};

export default theme;
