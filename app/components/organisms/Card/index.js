import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.color.background.primary};
  border-radius: ${props => props.theme.layout.borderRadius.default};
  height: 365px;
  flex: 0 0 66.66667%;
  max-width: 780px;
  -webkit-box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.16),
    0 2px 4px rgba(0, 0, 0, 0.32);
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.16),
    0 2px 4px rgba(0, 0, 0, 0.32);
`;

const CardHeader = styled.div`
  color: ${props => props.theme.color.foreground.primary};
  font-weight: ${props => props.theme.font.weight.medium};
  font-size: ${props => props.theme.font.size.desktop.default};
  border-bottom: 1px solid #e6e6e6;
  padding: 20px;
`;

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
`;

const CardFooter = styled.div`
  color: ${props => props.theme.color.foreground.primary};
  font-weight: ${props => props.theme.font.weight.light};
  font-size: ${props => props.theme.font.size.desktop.default};
  background-color: ${props => props.theme.color.background.secondary};
  padding: 20px;
  border-radius: ${props => props.theme.layout.borderRadius.default};
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
