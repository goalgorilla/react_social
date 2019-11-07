import styled from "styled-components";

const InfoTitle = styled.p`
  color: ${props => props.theme.color.text.three};
  font-size: ${props => props.theme.font.size.medium};
  font-weight: ${props => props.theme.font.weight.bold};
`;

export default InfoTitle;
