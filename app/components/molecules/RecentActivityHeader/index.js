import styled from "styled-components";

const RecentActivityHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  p {
    margin: 0;
    text-align: center;
    color: ${props => props.theme.color.text.three};
    line-height: ${props => props.theme.font.lineHeight.default};
  }
`;

export default RecentActivityHeader;
