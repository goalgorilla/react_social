import styled from "styled-components";
import { deviceMinWidth, deviceMaxWidth } from "../../../utils/device";

const Container = styled.div`
  display: none;
  justify-content: space-between;
  padding: 0 20px;
  margin: 10px 0 20px 0;

  @media ${deviceMinWidth.laptop} {
    display: flex;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Stat = styled.p`
  font-weight: ${props => props.theme.font.weight.bold};
  font-size: 2rem;
  margin: 0;
`;

const Label = styled.p`
  font-weight: ${props => props.theme.font.weight.bold};
  margin: 10px 0 0 0;
  font-size: ${props => props.theme.font.size.medium};
`;

const UserStats = props => {
  return (
    <Container>
      <Column>
        <Stat>25</Stat>
        <Label>Events</Label>
      </Column>
      <Column>
        <Stat>12</Stat>
        <Label>Topics</Label>
      </Column>
      <Column>
        <Stat>3</Stat>
        <Label>Groups</Label>
      </Column>
    </Container>
  );
};

export default UserStats;
