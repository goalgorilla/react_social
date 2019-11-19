import styled from "styled-components";

// InfoText is used to display a users information (e.g introduction or email address) on their profile page in the information tab.
const InfoText = styled.p`
  color: ${props => props.theme.color.text.one};
  font-size: ${props => props.theme.font.size.default};
  font-weight: ${props => props.theme.font.weight.medium};
`;

export default InfoText;
