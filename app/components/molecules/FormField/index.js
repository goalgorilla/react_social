import React from "react";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import InputDescription from "../../atoms/InputDescription";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
display flex;
flex-direction: column;
justify-content: space-between;
height: 90px;
`;

const FormField = props => (
  <Wrapper>
    <Label required={props.required}>{props.label}</Label>
    <Input required={props.required} type={props.type} />
    <InputDescription link={props.link}>{props.description}</InputDescription>
  </Wrapper>
);

FormField.defaultProps = {
  label: "",
  required: false,
  link: false,
  type: "",
  description: ""
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
  description: PropTypes.string
};

export default FormField;
