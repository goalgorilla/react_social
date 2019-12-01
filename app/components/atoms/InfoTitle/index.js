import styled from 'styled-components';

// InfoTitle is used on the information panel on the profile page. It is used to title a row of information (e.g Introduction, email..)
const InfoTitle = styled.h5`
  color: ${props => props.theme.color.text.three};
  font-size: ${props => props.theme.font.size.medium};
  font-weight: ${props => props.theme.font.weight.bold};
  margin: 5px 0;
`;

export default InfoTitle;
