import styled from "styled-components";
import Title from "../../atoms/Title";

const Container = styled.div`
  margin-top: 60px;
`;

const BoldTitle = styled(Title)`
  font-weight: ${props => props.theme.font.weight.bold};
  margin-bottom: 20px;
`;

function ProfileTopics(props) {
  const count = 0;
  if (props.activePanel == "topics") {
    return (
      <Container>
        <BoldTitle>{count} Topics</BoldTitle>
      </Container>
    );
  } else {
    return null;
  }
}

export default ProfileTopics;
