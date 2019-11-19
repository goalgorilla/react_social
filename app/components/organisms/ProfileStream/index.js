import styled from "styled-components";
import Title from "../../atoms/Title";

const Container = styled.div`
  margin-top: 60px;
`;

function ProfileStream(props) {
  if (props.activePanel == "stream") {
    return (
      <Container>
        <Title>Stream</Title>
      </Container>
    );
  } else {
    return null;
  }
}

export default ProfileStream;