import styled from "styled-components";
import Tag from "../../atoms/Tag";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const ActivityName = styled.p`
  font-weight: ${props => props.theme.font.weight.bold};
  font-size: ${props => props.theme.font.size.medium};
  color: ${props => props.theme.color.foreground.primary};
  margin-bottom: 10px;
`;

const ActivityDetails = styled.div`
  display: flex;
`;

const ActivityInfo = styled.div`
  display: flex;
  margin-right: 15px;

  & > * {
    margin: 0;
  }

  & > p {
    font-size: ${props => props.theme.font.size.small};
    color: ${props => props.theme.color.text.three};
    font-weight: ${props => props.theme.font.weight.medium};
  }

  p:first-child::after {
    content: " ";
    white-space: pre;
  }

  p:not(:first-child)::before {
    content: " • ";
  }
`;

const ActivityField = () => {
  return (
    <Container>
      <ActivityName>Brainstorm activities 2020</ActivityName>
      <ActivityDetails>
        <ActivityInfo>
          <p>28 Nov '19</p>
          <p>18:00 - 21:00</p>
        </ActivityInfo>
        <Tag>You also enrolled</Tag>
      </ActivityDetails>
    </Container>
  );
};

export default ActivityField;
