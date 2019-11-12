import styled from "styled-components";

const Tag = styled.p`
  color: ${props => props.theme.color.background.primary};
  font-size: ${props => props.theme.font.size.small};
  background: ${props => props.theme.color.brand.tertiary};
  font-weight: ${props => props.theme.font.weight.medium};
  padding: 1px 15px;
  margin: 0;
  border-radius: ${props => props.theme.layout.borderRadius.default};
`;

export default Tag;
