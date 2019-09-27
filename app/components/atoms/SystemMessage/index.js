import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSystemMessage = styled.p`
  border-radius: 5px;
  font-size: 14px;
  color: #a94442;
  background-color: #f2dede;
  border: 1px solid #ebccd1;
  padding: 20px;
  font-weight: 400;
  line-height: 1.5;
`;

const SystemMessage = ({ children, type }) => (
  <StyledSystemMessage {...type}>{children}</StyledSystemMessage>
);

SystemMessage.defaultProps = {
  type: "Information"
};

SystemMessage.propTypes = {
  /** the type of system message: Success, Failure, Warning, Information */
  type: PropTypes.string
};

export default SystemMessage;
