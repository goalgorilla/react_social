import styled from "styled-components";
import { deviceMinWidth, deviceMaxWidth } from "../../../utils/device";
import TextButton from "../../atoms/TextButton";
import RecentActivityTitle from "../../atoms/RecentActivityTitle";
import RecentActivitySubtitle from "../../atoms/RecentActivitySubtitle";
import RecentActivityHeader from "../../molecules/RecentActivityHeader";
import ActivityField from "../../molecules/ActivityField";

// RecentActivity component - Used to display the recent groups, events or topics of a given user
const Container = styled.div`
  background: ${props => props.theme.color.background.primary};
  display: none;
  flex-direction: column;
  margin: 30px 0;

  @media ${deviceMinWidth.laptop} {
    display: flex;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledTextButton = styled(TextButton)`
  margin-top: 30px;
`;

const RecentActivity = props => {
  switch (props.activity) {
    case "events":
      return (
        <Container>
          <Row>
            <RecentActivityHeader>
              <RecentActivityTitle>Upcoming events</RecentActivityTitle>
              <RecentActivitySubtitle>of this member</RecentActivitySubtitle>
            </RecentActivityHeader>
          </Row>
          <Row>
            <ActivityField></ActivityField>
          </Row>
          <Row>
            <ActivityField></ActivityField>
          </Row>
          <Row>
            <StyledTextButton onClick={() => props.setActivePanel("events")}>
              See all events of this member
            </StyledTextButton>
          </Row>
        </Container>
      );
    case "topics":
      return (
        <Container>
          <Row>
            <RecentActivityHeader>
              <RecentActivityTitle>Recently created topics</RecentActivityTitle>
              <RecentActivitySubtitle>of this member</RecentActivitySubtitle>
            </RecentActivityHeader>
          </Row>
          <Row>
            <ActivityField></ActivityField>
          </Row>
          <Row>
            <ActivityField></ActivityField>
          </Row>
          <Row>
            <StyledTextButton onClick={() => props.setActivePanel("topics")}>
              See all topics of this member
            </StyledTextButton>
          </Row>
        </Container>
      );
    case "groups":
      return (
        <Container>
          <Row>
            <RecentActivityHeader>
              <RecentActivityTitle>Recently joined groups</RecentActivityTitle>
              <RecentActivitySubtitle>of this member</RecentActivitySubtitle>
            </RecentActivityHeader>
          </Row>
          <Row>
            <ActivityField></ActivityField>
          </Row>
          <Row>
            <ActivityField></ActivityField>
          </Row>
          <Row>
            <StyledTextButton onClick={() => props.setActivePanel("groups")}>
              See all groups of this member
            </StyledTextButton>
          </Row>
        </Container>
      );
  }
};

export default RecentActivity;
