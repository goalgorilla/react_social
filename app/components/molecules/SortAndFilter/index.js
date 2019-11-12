import styled from "styled-components";
import Button from "../../atoms/Button";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  background: white;
  color: ${props => props.theme.color.text.one};
  font-weight: bold;
  font-size: ${props => props.theme.font.size.medium};
  border: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;

  &:hover {
    background: white;
  }

  &:first-of-type {
    margin-right: 15px;
  }
`;

function SortAndFilter() {
  return (
    <Container>
      <StyledButton>Sort</StyledButton>
      <StyledButton>Filter</StyledButton>
    </Container>
  );
}

export default SortAndFilter;
