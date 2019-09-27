import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FormField from "../../molecules/FormField";

const Wrapper = styled.div`
display flex;
flex-direction: column;
justify-content: space-between;
background-color: #FFFFFF;
border-radius: 5px;
height: 365px;
flex: 0 0 66.66667%;
max-width: 780px;
-webkit-box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.32);
box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.32);
`;

const CardHeader = styled.div`
  color: #777;
  font-weight: 500;
  font-size: 16px;
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
  color: #4d4d4d;
  font-weight: 300;
  font-size: 16px;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
`;

const Card = ({ children, header, footer }) => (
  <Wrapper>
    <CardHeader>{header}</CardHeader>
    <CardBlock>{children}</CardBlock>
    <CardFooter>{footer}</CardFooter>
  </Wrapper>
);

Card.defaultProps = {};

Card.propTypes = {};

export default Card;
