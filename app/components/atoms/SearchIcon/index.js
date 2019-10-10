import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImg = styled.img`
  filter: invert(0.5);
  height: 100%;
`;

const StyledSpan = styled.span`
  background: ${props => props.theme.color.background.primary};
`;

const SearchIcon = () => {
  return (
    <StyledSpan>
      <StyledImg src="/static/search.svg" width="24px"></StyledImg>
    </StyledSpan>
  );
};

SearchIcon.defaultProps = {};

SearchIcon.propTypes = {};

export default SearchIcon;
