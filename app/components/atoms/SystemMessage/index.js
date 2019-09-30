import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSystemMessage = styled.p`
  position: relative;
  border-radius: 5px;
  font-size: 14px;
  color: #a94442;
  background-color: #f2dede;
  border: 1px solid #ebccd1;
  padding: 20px 50px 20px 20px;
  font-weight: 400;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: url("./static/close.svg") no-repeat top left;
  background-size: contain;
  cursor: pointer;
  height: 20px;
  width: 20px;
  border: 0;
  outline: 0;
  filter: invert(43%) sepia(13%) saturate(2260%) hue-rotate(314deg)
    brightness(80%) contrast(99%);
`;

const SystemMessage = ({ children, type, close }) => {
  const onClick = e => {
    close();
  };

  return (
    <StyledSystemMessage {...type}>
      {children}
      <CloseButton onClick={onClick}></CloseButton>
    </StyledSystemMessage>
  );
};

SystemMessage.defaultProps = {
  type: "Information"
};

SystemMessage.propTypes = {
  /** the type of system message: Success, Failure, Warning, Information */
  type: PropTypes.string
};

export default SystemMessage;
