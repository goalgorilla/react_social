import styled from "styled-components";

const InfoTitle = styled.h5`
  color: ${props => props.theme.color.text.three};
  font-size: ${props => props.theme.font.size.medium};
  font-weight: ${props => props.theme.font.weight.bold};
  margin: 5px 0;
`;

export default InfoTitle;
