import styled from "styled-components";

// Chips are used to display users' expertise and interests
const Chip = styled.p`
  color: ${props => props.theme.color.text.one};
  text-align: center;
  padding: 4px 15px;
  width: 100%;
  margin: 0 5px !important;
  border-radius: 15px;
  font-size: ${props => props.theme.font.size.default};
  font-weight: ${props => props.theme.font.weight.bold};
  background: ${props => props.theme.color.background.secondary};
`;

export default Chip;
