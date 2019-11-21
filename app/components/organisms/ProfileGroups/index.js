import styled from "styled-components";
import Title from "../../atoms/Title";
import Card from "../../organisms/Card";
import CardBody from "../../atoms/CardBody";

const Container = styled.div(props => `
  margin-top: calc(${props.theme.layout.profile.navHeight} + 20px);
`);

function ProfileGroups(props) {
  const count = 0;
  return (
    <Container>
      <Title>{count} Groups</Title>
      <Card>
        <CardBody>Temp Group Card 1</CardBody>
      </Card>
      <Card>
        <CardBody>Temp Group Card 1</CardBody>
      </Card>
      <Card>
        <CardBody>Temp Group Card 1</CardBody>
      </Card>
    </Container>
  );
}

export default ProfileGroups;
