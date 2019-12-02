import styled from 'styled-components';
import {deviceMaxWidth, deviceMinWidth} from '../../../utils/device';

// InfoRow is used to contain InfoTitle (e.g Email) and the relevant text (e.g. chrishall@gmail.com).
const InfoRow = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 5px 0;
  }

  @media ${deviceMinWidth.laptop} {
    flex-direction: row;
    padding: 10px;
  }
`;

export default InfoRow;
