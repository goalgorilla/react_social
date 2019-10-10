import themeData from "../static/theme.json";

const theme = {
  color: {
    brand: {
      primary: "#36a9e1",
      secondary: "#2189b5",
      tertiary: "#116892",
      accent: ""
    },
    foreground: {
      primary: "#4d4d4d",
      secondary: "#777777"
    },
    background: {
      primary: "#ffffff",
      secondary: "#f3f3f3"
    },
    text: {
      light: "#ffffff",
      one: "#555555",
      two: "#adadad"
    },
    system: {
      failure: {
        border: "#ebccd1",
        background: "#f2dede",
        text: "#a94442"
      }
    }
  },
  font: {
    family: "'Montserrat', sans-serif",
    weight: {
      light: "300",
      regular: "400",
      medium: "500",
      default: "600",
      bold: "700"
    },
    size: {
      desktop: {
        small: "12px",
        medium: "14px",
        default: "16px",
        large: "20px",
        veryLarge: "48px"
      },
      mobile: {
        small: "10.5px",
        medium: "12.25px",
        default: "14px",
        large: "17.5px",
        veryLarge: "32px"
      }
    },
    lineHeight: {
      small: "1.1",
      default: "1.5"
    }
  },
  layout: {
    borderRadius: {
      small: "3px",
      default: "5px"
    },
    maxWidth: "1200px",
    padding: "0 20px"
  }
};

export default theme;
