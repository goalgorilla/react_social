import styled from 'styled-components';

// A footer for the card component
const CardFooter = styled.div`
  border-radius: ${props => props.theme.layout.borderRadius.default};
  padding: 1.25rem;
  background-color: ${props => props.theme.color.background.secondary};
  font-size: ${props => props.theme.font.size.default};
  font-weight: ${props => props.theme.font.weight.light};
`;

export default CardFooter;
