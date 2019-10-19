import React from "react";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import InputDescription from "../../atoms/InputDescription";
import styled from "styled-components";
import PropTypes from "prop-types";

// A component to style a form field (label + input + input description)
const Wrapper = styled.div`
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  height: 5.625rem;
`;

const FormField = props => {
  return (
    <Wrapper>
      <Label required={props.required}>{props.label}</Label>
      <Input
        required={props.required}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
      <InputDescription link={props.link}>{props.description}</InputDescription>
    </Wrapper>
  );
};

FormField.defaultProps = {
  label: "",
  required: false,
  link: false,
  type: "",
  description: "",
  value: ""
};

FormField.propTypes = {
  /** string containing the input's label */
  label: PropTypes.string,
  /** boolean indicating if the form field is required */
  required: PropTypes.bool,
  /** boolean indicating if the input description is a link */
  link: PropTypes.bool,
  /** the input type (password, text, etc..) */
  type: PropTypes.string,
  /** string containing the input's description text */
  description: PropTypes.string,
  /** string containing the input's value */
  value: PropTypes.string
};

export default FormField;
