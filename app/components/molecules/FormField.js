import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import InputDescription from "../atoms/InputDescription";
import styled from "styled-components";

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

export default FormField;
