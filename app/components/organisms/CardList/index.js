import styled from "styled-components";
import Button from "../../atoms/Button";

const StyledButton = styled(Button)`
  background: white;
  color: ${props => props.theme.color.text.one};
  font-weight: ${props => props.theme.font.weight.bold};
  border: 0px;
  padding-top: 10px;
  padding-bottom: 10px;

  &:hover {
    background: white;
  }
`;

const Container = styled.div`
  margin-top: 20px;
  padding: 0;

  & > div {
    margin-bottom: 20px;
  }
`;

const CardList = ({ children }) => {
  return (
    <Container>
      {children}
      <StyledButton>Load more</StyledButton>
    </Container>
  );
};

export default CardList;
