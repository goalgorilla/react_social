import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// A card component to contain content - used, for example, for the login page's form.
const Card = styled.div`
  flex: 0 0 66.66667%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.16),
    0 2px 4px rgba(0, 0, 0, 0.32);
  border-radius: ${props => props.theme.layout.borderRadius.default};
  background-color: ${props => props.theme.color.background.primary};
`;

Card.defaultProps = {};

Card.propTypes = {
  /** object containing the header's content */
  header: PropTypes.object,
  /** object containing the footer's content */
  footer: PropTypes.object
};

export default Card;
