import styled from "styled-components";
import { deviceMinWidth, deviceMaxWidth } from "../../../utils/device";

const TextButton = styled.p`
  display: none;
  font-size: ${props => props.theme.font.size.medium};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.theme.color.brand.primary};
  margin-top: 30px;
  margin-bottom: 0;
  cursor: pointer;

  @media ${deviceMinWidth.laptop} {
    display: block;
  }
`;

export default TextButton;
