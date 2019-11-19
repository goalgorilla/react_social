import styled from "styled-components";
import Title from "../../atoms/Title";
import CardList from "../CardList";
import GroupCard from "../../molecules/GroupCard";

const Container = styled.div`
  margin-top: 60px;
`;

function ProfileGroups(props) {
  const count = 0;
  if (props.activePanel == "groups") {
    return (
      <Container>
        <Title>{count} Groups</Title>
        <CardList>
          <GroupCard>Temp Group Card 1</GroupCard>
          <GroupCard>Temp Group Card 2</GroupCard>
          <GroupCard>Temp Group Card 3</GroupCard>
        </CardList>
      </Container>
    );
  } else {
    return null;
  }
}

export default ProfileGroups;
