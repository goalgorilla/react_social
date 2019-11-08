import styled from "styled-components";
import Title from "../../atoms/Title";
import CardList from "../CardList";
import GroupCard from "../../molecules/GroupCard";
import { deviceMinWidth, deviceMaxWidth } from "../../../utils/device";

const Container = styled.div`
  margin-top: 60px;

  @media ${deviceMinWidth.laptop} {
    margin-top: 30px;
  }
`;

const BoldTitle = styled(Title)`
  font-weight: ${props => props.theme.font.weight.bold};
  margin-bottom: 20px;
`;

function ProfileGroups(props) {
  const count = 0;
  if (props.activePanel == "groups") {
    return (
      <Container>
        <BoldTitle>{count} Groups</BoldTitle>
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
