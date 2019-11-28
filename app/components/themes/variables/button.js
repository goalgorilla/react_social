import {
  BRAND_PRIMARY_COLOR,
  BRAND_SECONDARY_COLOR,
  BRAND_ACCENT_COLOR
} from "./colors.js";

const button = {
  color: {
    default: "#4d4d4d",
    primary: "#ffffff",
    secondary: "#ffffff",
    accent: "#333"
  },
  bgColor: {
    default: "#ffffff",
    primary: BRAND_PRIMARY_COLOR,
    secondary: BRAND_SECONDARY_COLOR,
    accent: BRAND_ACCENT_COLOR
  },
  borderColor: {
    default: "#adadad",
    primary: BRAND_PRIMARY_COLOR,
    secondary: BRAND_SECONDARY_COLOR,
    accent: BRAND_ACCENT_COLOR
  },
  fontSize: "0.875rem",
  fontSizeSmall: "0.75rem",
  fontSizeExtraSmall: "0.75rem",
  fontSizeLarge: "1rem",
  fontWeight: "normal",
  floatingSize: "38px",
  floatingLargeSize: "52px",
  floatingRadius: "50%",
  linkDisabledColor: "#777777"
};

export default button;
