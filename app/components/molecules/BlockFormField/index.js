import styled from "styled-components";

// A component to style a form field (label + input + input description) as a block
const BlockFormField = styled.div`
  flex-direction: column;
  justify-content: space-between;
  display: flex;

  & > * {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }
`;

BlockFormField.defaultProps = {};

BlockFormField.propTypes = {};

export default BlockFormField;
