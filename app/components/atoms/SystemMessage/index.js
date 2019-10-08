import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSystemMessage = styled.p`
  position: relative;
  border-radius: ${props => props.theme.layout.borderRadius.default};
  font-size: ${props => props.theme.font.size.desktop.medium};
  color: ${props => props.theme.color.system.failure.text};
  background-color: ${props => props.theme.color.system.failure.background};
  border: 1px solid ${props => props.theme.color.system.failure.border};
  padding: 20px 50px 20px 20px;
  font-weight: ${props => props.theme.font.weight.regular};
  line-height: ${props => props.theme.font.lineHeight.default};
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
