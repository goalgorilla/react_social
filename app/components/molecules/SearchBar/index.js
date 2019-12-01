import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchIcon from '../../atoms/SearchIcon';
import SearchInput from '../../atoms/SearchInput';

// A search bar - consists of an input field and a search icon
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0.625rem 0.625rem;
  background: ${props => props.theme.color.background.secondary};
  margin: -0.625rem 1.25rem 0 -0.625rem;
`;

const SearchBar = ({placeholder}) => {
  return (
    <Wrapper>
      <SearchInput placeholder={placeholder} />
      <SearchIcon />
    </Wrapper>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchBar;
