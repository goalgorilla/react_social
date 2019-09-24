import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledTitle = styled.h2`
  margin: 20px; /* remove this */
  font-size: 20px;
  color: #4d4d4d;
  font-weight: 500;
  line-height: 1.1;
`;

const Title = props => {
  return <StyledTitle>{props.text}</StyledTitle>;
};

Title.propTypes = {
  /** string containing the title text */
  text: PropTypes.string
};

export default Title;
