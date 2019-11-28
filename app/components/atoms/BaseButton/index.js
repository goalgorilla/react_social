import styled from "styled-components";

// Retrieves button color attributes from /components/themes
const getThemeMapper = namespace => ({ variant, theme }) => {
  return typeof theme.button[namespace][variant] !== "undefined"
    ? theme.button[namespace][variant]
    : theme.button[namespace].default;
};

// Color attributes
const variantColor = getThemeMapper("color");
const variantBgColor = getThemeMapper("bgColor");
const variantBorderColor = getThemeMapper("borderColor");

// Other attributes
const borderRadius = props => {
  switch (props.radius) {
    case "base":
      return props.theme.components.borderRadiusBase;
    case "small":
      return props.theme.components.borderRadiusSmall;
    case "large":
      return props.theme.components.borderRadiusLarge;
    default:
      return "0";
  }
};
const paddingHorizontal = props => {
  switch (props.paddingHorizontal) {
    case "xs":
      return props.theme.components.paddingXsHorizontal;
    case "small":
      return props.theme.components.paddingSmallHorizontal;
    case "large":
      return props.theme.components.paddingLargeHorizontal;
    case "xl":
      return props.theme.components.paddingXlHorizontal;
    default:
      return props.theme.components.paddingBaseHorizontal;
  }
};
const paddingVertical = props => {
  switch (props.paddingVertical) {
    case "xs":
      return props.theme.components.paddingXsVertical;
    case "small":
      return props.theme.components.paddingSmallVertical;
    case "large":
      return props.theme.components.paddingLargeVertical;
    default:
      return props.theme.components.paddingBaseVertical;
  }
};

// BaseButton component - Rectangular shaped buttons that is used in most cases.
// Does not lift (on same layer as the parent element) and should be placed on cards.
const BaseButton = styled.button`
display: inline-block;
margin-bottom: 0; // For input.btn
font-weight: ${props =>
  props.fontWeight ? props.fontWeight : props.theme.button.fontWeight};
text-align: center;
vertical-align: middle;
touch-action: manipulation;
cursor: pointer;
color: ${variantColor};
background-image: none; // Reset unusual Firefox-on-Android default style
background-color: ${variantBgColor};
border: 1px solid ${variantBorderColor};
border-radius: ${borderRadius};
padding: ${paddingVertical} ${paddingHorizontal};
font-size: ${props => props.theme.button.fontSize};
line-height: 1.5;
user-select: none;
transition: .3s ease-out;
outline: 0;

&:hover,
&:focus
    text-decoration: none;
    outline: 0;
}

&:active{
    background-image: none;
}

&[disabled],
fieldset[disabled] {
    cursor: not-allowed;
    opacity: .65;
    box-shadow: none;
}

a {
    font-weight: ${props => props.theme.button.fontWeight};
}
`;

export default BaseButton;
