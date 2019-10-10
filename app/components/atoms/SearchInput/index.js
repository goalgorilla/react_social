import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  font-size: ${props => props.theme.font.size.mobile.medium};
  font-weight: ${props => props.theme.font.weight.default};
  color: #4d4d4d;
  border: 0;

  &::placeholder {
    color: #a3a3a3;
  }

  &:focus {
    outline: 0;
  }
`;

const SearchInput = ({ placeholder }) => {
  return <StyledInput placeholder={placeholder}></StyledInput>;
};

SearchInput.defaultProps = {};

SearchInput.propTypes = {};

export default SearchInput;
