import React from "react";
import styled from "styled-components";
import BaseButton from "../BaseButton"

// LinkButton component - Are text-only buttons. They should always have a color to
// distinguish them from normal text. They can be used to put less emphasis
// or visual attraction to the action. They may be used in dialogs, toolbars,
// or inline. They do not lift, but fill with color on press.
const LinkButton = styled(BaseButton)`
font-weight: normal;

&,
&:active,
&[disabled],
&:hover,
&:focus,
fieldset[disabled] & {
background-color: transparent;
border-color: transparent;
box-shadow: none;
}

&[disabled],
fieldset[disabled] & {
&:hover,
&:focus {
    text-decoration: none;
}
}
`;

export default LinkButton;
