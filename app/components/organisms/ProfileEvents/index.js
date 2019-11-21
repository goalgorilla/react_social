import styled from "styled-components";
import Title from "../../atoms/Title";
import SortAndFilter from "../../molecules/SortAndFilter";
import Card from "../Card";
import CardBody from "../../atoms/CardBody";

const Container = styled.div(props => `
  margin-top: calc(${props.theme.layout.profile.navHeight} + 20px);
`);

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
  cursor: pointer;
`;

function ProfileEvents(props) {
  const count = 0;
  return (
    <Container>
      <HeaderRow>
        <Title>{count} Events</Title>
        <Reset>Reset</Reset>
      </HeaderRow>
      <SortAndFilter />
      <Card>
        <CardBody>Temp Event Card 1</CardBody>
      </Card>
      <Card>
        <CardBody>Temp Event Card 1</CardBody>
      </Card>
      <Card>
        <CardBody>Temp Event Card 1</CardBody>
      </Card>
    </Container>
  );
}

export default ProfileEvents;