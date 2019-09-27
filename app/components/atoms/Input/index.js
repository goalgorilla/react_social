import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  border-radius: 3px;
  border: 1px solid #adadad;
  width: 100%;
  max-width: 23rem;
  color: #555555;
  background-color: #fff;
  outline: 0;
  font-size: 16px;
  padding: 6px 12px;
  line-height: 1.5;
  font-family: inherit;
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;

  &:focus {
    border-color: #29abe2;
    box-shadow: 0 2px 0 0 #29abe2;
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
