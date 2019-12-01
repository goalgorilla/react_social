import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// An input field component used for search
const StyledInput = styled.input`
  width: 100%;
  padding: 0.3125rem 0.625rem;
  font-size: ${props => props.theme.font.size.medium};
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

const SearchInput = ({placeholder}) => {
  return <StyledInput placeholder={placeholder} />;
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchInput;
