import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  border-radius: ${props => props.theme.layout.borderRadius.small};
  border: 1px solid ${props => props.theme.color.text.two};
  width: 100%;
  max-width: 23rem;
  color: ${props => props.theme.color.text.one};
  background-color: ${props => props.theme.color.background.primary};
  outline: 0;
  font-size: ${props => props.theme.font.size.desktop.default};
  padding: 6px 12px;
  line-height: ${props => props.theme.font.lineHeight.default};
  font-family: ${props => props.theme.font.family};
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;

  &:focus {
    border-color: ${props => props.theme.color.brand.primary};
    box-shadow: 0 2px 0 0 ${props => props.theme.color.brand.primary};
  }
`;

const Input = props => {
  const onChange = e => {
    props.onChange(e.target.value);
  };

  if (props.required) {
    return (
      <StyledInput
        type={props.type}
        onChange={onChange}
        name={props.name}
        required
      ></StyledInput>
    );
  }
  return (
    <StyledInput
      type={props.type}
      onChange={onChange}
      name={props.name}
    ></StyledInput>
  );
};

Input.defaultProps = {
  type: "text"
};

Input.propTypes = {
  /** the input type (password, text, etc..) */
  type: PropTypes.string
};

export default Input;
