import React from "react";
import styled from "styled-components";
import { deviceMinWidth } from "../../../utils/device";

// BaseButton component - Rectangular shaped buttons that is used in most cases.
// Does not lift (on same layer as the parent element) and should be placed cards.
const BaseButton = styled.button.attrs(props => ({
    color: () => {
        switch (props.variant) {
            case 'primary':
                return "#ffffff";
            case 'secondary':
                return "#ffffff";
            case 'accent':
                return "#333";
            default:
                return props.theme.color.foreground.primary;
        }
    },
    bgColor: () => {
        switch (props.variant) {
            case 'primary':
                return props.theme.color.brand.primary;
            case 'secondary':
                return props.theme.color.brand.secondary;
            case 'accent':
                return props.theme.color.brand.accent;
            default:
                return "#ffffff";
        }
    },
    borderColor: () => {
        switch (props.variant) {
            case 'primary':
                return props.theme.color.brand.primary;
            case 'secondary':
                return props.theme.color.brand.secondary;
            case 'accent':
                return props.theme.color.brand.accent;
            default:
                return props.theme.color.text.two;
        }
    },
    borderRadius: () => {
        switch (props.radius) {
            case 'base':
                return props.theme.components.borderRadiusBase;
            case 'small':
                return props.theme.components.borderRadiusSmall;
            case 'large':
                return props.theme.components.borderRadiusLarge;
            default:
                return "0";
        }
    },
    paddingH: () => {
        switch (props.paddingHorizontal) {
            case 'xs':
                return props.theme.components.paddingXsHorizontal;
            case 'small':
                return props.theme.components.paddingSmallHorizontal;
            case 'large':
                return props.theme.components.paddingLargeHorizontal;
            case 'xl':
                return props.theme.components.paddingXlHorizontal;
            default:
                return props.theme.components.paddingBaseHorizontal;
        }
    },
    paddingV: () => {
        switch (props.paddingVertical) {
            case 'xs':
                return props.theme.components.paddingXsVertical;
            case 'small':
                return props.theme.components.paddingSmallVertical;
            case 'large':
                return props.theme.components.paddingLargeVertical;
            default:
                return props.theme.components.paddingBaseVertical;
        }
    }
}))`
display: inline-block;
margin-bottom: 0; // For input.btn
font-weight: ${props => props.theme.button.fontWeight};
text-align: center;
vertical-align: middle;
touch-action: manipulation;
cursor: pointer;
color: ${props => props.color};
background-image: none; // Reset unusual Firefox-on-Android default style
background-color: ${props => props.bgColor};
border: 1px solid ${props => props.borderColor};
border-radius: ${props => props.borderRadius};
padding: ${props => props.paddingV} ${props => props.paddingH};
font-size: ${ props => props.theme.button.fontSize};
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
    font-weight: ${ props => props.theme.button.fontWeight};
}


`;

export default BaseButton;
