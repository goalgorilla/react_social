import React from "react";
import styled from "styled-components";
import BaseButton from "../BaseButton"

// RaisedButton component - Rectangular-shaped buttons that behave like a piece of
// material resting on another sheet – they lift and fill with color on press.
// Raised buttons add dimension to mostly flat layouts. They emphasize functions
// on busy or wide spaces. They may be used inline. They lift and display
// ink reactions on press.
const RaisedButton = styled(BaseButton)`
box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
transition: box-shadow, .15s ease-out;
`;

export default RaisedButton;
