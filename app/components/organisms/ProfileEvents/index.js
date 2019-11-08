import styled from "styled-components";
import Title from "../../atoms/Title";

const Container = styled.div`
  margin-top: 60px;
`;

const BoldTitle = styled(Title)`
  font-weight: ${props => props.theme.font.weight.bold};
  margin-bottom: 20px;
`;

function ProfileEvents(props) {
  const count = 0;
  if (props.activePanel == "events") {
    return (
      <Container>
        <BoldTitle>{count} Events</BoldTitle>
      </Container>
    );
  } else {
    return null;
  }
}

export default ProfileEvents;
