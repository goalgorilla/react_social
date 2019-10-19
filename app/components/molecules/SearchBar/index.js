import React from "react";
import SearchIcon from "../../atoms/SearchIcon";
import SearchInput from "../../atoms/SearchInput";
import styled from "styled-components";
import PropTypes from "prop-types";

// A search bar - consists of an input field and a search icon
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0.625rem 0.625rem;
  background: ${props => props.theme.color.background.secondary};
  margin: -0.625rem 1.25rem 0 -0.625rem;
`;

const SearchBar = ({ placeholder }) => {
  return (
    <Wrapper>
      <SearchInput placeholder={placeholder}></SearchInput>
      <SearchIcon></SearchIcon>
    </Wrapper>
  );
};

SearchBar.defaultProps = {};

SearchBar.propTypes = {};

export default SearchBar;
