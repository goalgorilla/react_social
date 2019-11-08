import styled from "styled-components";
import Title from "../../atoms/Title";
import SortAndFilter from "../../molecules/SortAndFilter";
import CardList from "../CardList";
import EventCard from "../../molecules/EventCard";

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
  cursor: pointer;
`;

function ProfileEvents(props) {
  const count = 0;
  if (props.activePanel == "events") {
    return (
      <Container>
        <HeaderRow>
          <BoldTitle>{count} Events</BoldTitle>
          <Reset>Reset</Reset>
        </HeaderRow>
        <SortAndFilter />
        <CardList>
          <EventCard>Temp Event Card 1</EventCard>
          <EventCard>Temp Event Card 2</EventCard>
          <EventCard>Temp Event Card 3</EventCard>
          <EventCard>Temp Event Card 4</EventCard>
        </CardList>
      </Container>
    );
  } else {
    return null;
  }
}

export default ProfileEvents;
