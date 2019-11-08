import styled from "styled-components";
import Title from "../../atoms/Title";

const Container = styled.div`
  margin-top: 60px;
`;

const BoldTitle = styled(Title)`
  font-weight: ${props => props.theme.font.weight.bold};
  margin-bottom: 20px;
`;

function ProfileStream(props) {
  if (props.activePanel == "stream") {
    return (
      <Container>
        <BoldTitle>Stream</BoldTitle>
      </Container>
    );
  } else {
    return null;
  }
}

export default ProfileStream;
