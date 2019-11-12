import styled from "styled-components";
import { deviceMaxWidth, deviceMinWidth } from "../../../utils/device";

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
