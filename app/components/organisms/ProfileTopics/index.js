import styled from "styled-components";
import Title from "../../atoms/Title";
import SortAndFilter from "../../molecules/SortAndFilter";
import Card from "../../organisms/Card";
import CardBody from "../../atoms/CardBody";

const Container = styled.div`
  margin-top: 60px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;

  & > h2,
  p {
    margin-top: 0;
  }
`;

const Reset = styled.p`
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.theme.color.brand.primary};
`;

function ProfileTopics(props) {
  const count = 0;
  if (props.activePanel == "topics") {
    return (
      <Container>
        <HeaderRow>
          <Title>{count} Topics</Title>
          <Reset>Reset</Reset>
        </HeaderRow>
        <SortAndFilter />
        <Card>
          <CardBody>Temp Topic Card 1</CardBody>
        </Card>
        <Card>
          <CardBody>Temp Topic Card 1</CardBody>
        </Card>
        <Card>
          <CardBody>Temp Topic Card 1</CardBody>
        </Card>
      </Container>
    );
  } else {
    return null;
  }
}

export default ProfileTopics;
