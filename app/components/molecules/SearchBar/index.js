import React from "react";
import SearchIcon from "../../atoms/SearchIcon";
import SearchInput from "../../atoms/SearchInput";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 10px;
  background: ${props => props.theme.color.background.secondary};
  margin: -10px 20px 0 -10px;
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
