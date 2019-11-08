import styled from "styled-components";
import Title from "../../atoms/Title";
import SortAndFilter from "../../molecules/SortAndFilter";

const Container = styled.div`
  margin-top: 60px;
`;

const BoldTitle = styled(Title)`
  font-weight: ${props => props.theme.font.weight.bold};
  margin-bottom: 20px;
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
          <BoldTitle>{count} Topics</BoldTitle>
          <Reset>Reset</Reset>
        </HeaderRow>
        <SortAndFilter />
      </Container>
    );
  } else {
    return null;
  }
}

export default ProfileTopics;