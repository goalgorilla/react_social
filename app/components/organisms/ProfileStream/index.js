import styled from "styled-components";
import Title from "../../atoms/Title";

const Container = styled.div`
  margin-top: 60px;
`;

function ProfileStream(props) {
  return (
    <Container>
      <Title>Stream</Title>
    </Container>
  );
}

export default ProfileStream;
