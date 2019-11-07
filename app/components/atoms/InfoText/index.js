import styled from "styled-components";

const InfoText = styled.p`
  color: ${props => props.theme.color.text.one};
  font-size: ${props => props.theme.font.size.default};
  font-weight: ${props => props.theme.font.weight.medium};
`;

export default InfoText;
