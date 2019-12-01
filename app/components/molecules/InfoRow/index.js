import styled from 'styled-components';

// InfoRow is used to contain InfoTitle (e.g Email) and the relevant text (e.g. chrishall@gmail.com).
const InfoRow = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 5px 0;
  }
`;

export default InfoRow;
