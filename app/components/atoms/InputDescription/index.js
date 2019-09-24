import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInputDescription = styled.h4`
  margin: 20px; /* remove this */
  font-size: 12px;
  color: #464545;
  font-weight: ${props => (props.link ? "500" : "300")};
  cursor: ${props => (props.link ? "pointer" : "default")};
  line-height: 1.5;
`;

const InputDescription = props => {
  if (props.link) {
    return <StyledInputDescription link>{props.text}</StyledInputDescription>;
  }
  return <StyledInputDescription>{props.text}</StyledInputDescription>;
};

InputDescription.defaultProps = {
  link: false
};

InputDescription.propTypes = {
  /** string containing the description of the input field */
  text: PropTypes.string,
  /** boolean indicating if the input description is a link to another page */
  link: PropTypes.bool
};

export default InputDescription;
