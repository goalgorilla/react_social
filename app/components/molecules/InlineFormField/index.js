import styled from 'styled-components';

// A component to style a form field (Inputlabel + input + input description) as inline
const InlineFormField = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  display: flex;

  & > * {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    flex-grow: 1;
    width: 50%;
  }
`;

InlineFormField.defaultProps = {};

InlineFormField.propTypes = {};

export default InlineFormField;
