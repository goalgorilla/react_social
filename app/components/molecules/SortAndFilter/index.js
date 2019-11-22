import styled from "styled-components";
import RaisedButton from "../../atoms/RaisedButton";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;

  & > *:not(:first-child) {
    margin-left: 5px;
  }

  & > *:not(:last-child) {
    margin-right: 5px;
  }

  & > * {
    flex: 50%;
  }
  
`;

function SortAndFilter() {
  return (
    <Container>
      <RaisedButton radius="small" paddingHorizontal="xl" paddingVertical="large"><strong>Sort</strong></RaisedButton>
      <RaisedButton radius="small" paddingHorizontal="xl" paddingVertical="large"><strong>Filter</strong></RaisedButton>
    </Container>
  );
}

export default SortAndFilter;
