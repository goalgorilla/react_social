import styled from 'styled-components';

// Input component used for form fields
const StyledInput = styled.input`
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  border: 1px solid ${props => props.theme.color.text.two};
  border-radius: ${props => props.theme.layout.borderRadius.small};
  max-width: 23rem;
  padding: 0.375rem 0.75rem;
  background-color: ${props => props.theme.color.background.primary};
  font-size: ${props => props.theme.font.size.default};
  line-height: ${props => props.theme.font.lineHeight.default};
  font-family: ${props => props.theme.font.family};
  color: ${props => props.theme.color.text.one};
  outline: 0;

  &:focus {
    box-shadow: 0 2px 0 0 ${props => props.theme.color.brand.primary};
    border-color: ${props => props.theme.color.brand.primary};
  }
`;

export default StyledInput;
