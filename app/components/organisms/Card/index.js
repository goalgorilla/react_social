import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// A card component to contain content - used, for example, for the login page's form.
const Wrapper = styled.div`
  flex: 0 0 66.66667%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.16),
    0 2px 4px rgba(0, 0, 0, 0.32);
  border-radius: ${props => props.theme.layout.borderRadius.default};
  max-width: 48.75rem;
  height: 22.81rem;
  background-color: ${props => props.theme.color.background.primary};
`;

const CardHeader = styled.div`
  border-bottom: 1px solid #e6e6e6;
  padding: 1.25rem;
  font-size: ${props => props.theme.font.size.default};
  font-weight: ${props => props.theme.font.weight.medium};
  color: ${props => props.theme.color.foreground.primary};
`;

const CardBlock = styled.div`
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  height: 100%;
  padding: 1.25rem;
`;

const CardFooter = styled.div`
  border-radius: ${props => props.theme.layout.borderRadius.default};
  padding: 1.25rem;
  background-color: ${props => props.theme.color.background.secondary};
  font-size: ${props => props.theme.font.size.default};
  font-weight: ${props => props.theme.font.weight.light};
  color: ${props => props.theme.color.foreground.primary};
`;

const Card = ({ children, header, footer }) => (
  <Wrapper>
    <CardHeader>{header}</CardHeader>
    <CardBlock>{children}</CardBlock>
    <CardFooter>{footer}</CardFooter>
  </Wrapper>
);

Card.defaultProps = {};

Card.propTypes = {
  /** object containing the header's content */
  header: PropTypes.object,
  /** object containing the footer's content */
  footer: PropTypes.object
};

export default Card;
