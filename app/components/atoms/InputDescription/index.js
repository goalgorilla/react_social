import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInputDescription = styled.h4`
  font-size: 12px;
  color: ${props => props.theme.color.foreground.primary};
  margin: 0;
  font-weight: ${props =>
    props.link
      ? props.theme.font.weight.medium
      : props.theme.font.weight.light};
  cursor: ${props => (props.link ? "pointer" : "default")};
`;

const InputDescription = ({ children, link }) => {
  if (link) {
    return <StyledInputDescription link>{children}</StyledInputDescription>;
  }
  return <StyledInputDescription>{children}</StyledInputDescription>;
};

InputDescription.defaultProps = {
  link: false
};

InputDescription.propTypes = {
  /** boolean indicating if the input description is a link to another page */
  link: PropTypes.bool
};

export default InputDescription;
