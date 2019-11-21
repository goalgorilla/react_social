import styled from "styled-components";
import { deviceMaxWidth } from "../../../utils/device";
import Title from "../../atoms/Title";
import Card from "../../organisms/Card";
import CardBody from "../../atoms/CardBody";
import HorizontalLine from "../../atoms/HorizontalLine";
import InfoTitle from "../../atoms/InfoTitle";
import InfoRow from "../InfoRow";
import BadgeContainer from "../BadgeContainer";
import Badge from "../../atoms/Badge/";

const StyledHorizontalLine = styled(HorizontalLine)`
  margin: 10px 0;
`;

const Container = styled.div(props => `
  margin-top: calc(${props.theme.layout.profile.navHeight} + 20px);
`);

function ProfileInformation(props) {
  return (
    <Container>
      <Title>Information</Title>
      <Card>
        <CardBody>
          <InfoRow>
            <InfoTitle>Introduction</InfoTitle>
            <p>
              sdfhj ksdhf kshfdk shfskdjfhsdfdhsjfhksdjhfks dhs f skdjfhdks
              fdhs fsdhkf ksdhjfdjks djksk hksdj hksh ksdjhfksjhsdfhj ksdhf
              kshfdk shfskdjfhsdfdhsjfhksdjhfks dhs f skdjfhdks fdhs fsdhkf
              ksdhjfdjks djksk hksdj hksh ksdjhfksjhsdfhj ksdhf kshfdk
                <br />
              <br />
              shfskdjfhsdfdhsjfhksdjhfks dhs f skdjfhdks fdhs fsdhkf
              ksdhjfdjks djksk hksdj hksh ksdjhfksjh sdfhj ksdhf kshfdk
              shfskdjfhsdfdhsjfhksdjhfks dhs f skdjfhdks fdhs fsdhkf
              ksdhjfdjks djksk hksdj hksh ksdjhfksjh
              </p>
          </InfoRow>

          <StyledHorizontalLine />
          <InfoRow>
            <InfoTitle>Email</InfoTitle>
            <p>justin@tba.jp</p>
          </InfoRow>
          <StyledHorizontalLine />
          <InfoRow>
            <InfoTitle>Phone number</InfoTitle>
            <p>080-1234-5678</p>
          </InfoRow>

          <StyledHorizontalLine />
          <InfoRow>
            <InfoTitle>Interests</InfoTitle>
            <BadgeContainer>
              <Badge>Cooking</Badge>
              <Badge>Football</Badge>
              <Badge>Reading</Badge>
            </BadgeContainer>
          </InfoRow>

          <StyledHorizontalLine />
          <InfoRow>
            <InfoTitle>Expertise</InfoTitle>
            <BadgeContainer>
              <Badge>Multicultural communication</Badge>
            </BadgeContainer>
          </InfoRow>
        </CardBody>
      </Card>
    </Container>
  );
}

export default ProfileInformation;