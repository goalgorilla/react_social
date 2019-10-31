import themeData from "../static/theme.json";

// A file containing all the theme data for styled-components
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
      two: "#adadad",
      three: "#777777"
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
      verySmall: "0.6875rem",
      small: "0.75rem",
      medium: "0.875rem",
      default: "1rem",
      large: "1.25rem",
      veryLarge: "3rem"
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
    maxWidth: "75rem",
    padding: "0 1.25rem"
  }
};

export default theme;
