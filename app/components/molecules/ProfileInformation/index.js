import styled from "styled-components";
import { deviceMaxWidth } from "../../../utils/device";
import Title from "../../atoms/Title";
import Card from "../../organisms/Card";
import CardBody from "../../atoms/CardBody";
import HorizontalLine from "../../atoms/HorizontalLine";
import InfoTitle from "../../atoms/InfoTitle";
import InfoText from "../../atoms/InfoText";
import InfoRow from "../InfoRow";
import ChipContainer from "../ChipContainer";
import Chip from "../../atoms/Chip";

const StyledHorizontalLine = styled(HorizontalLine)`
  margin: 10px 0;
`;

const Container = styled.div`
  margin-top: 60px;
`;

function ProfileInformation(props) {
  if (props.activePanel == "information") {
    return (
      <Container>
        <Title>Information</Title>
        <Card>
          <CardBody>
            <InfoRow>
              <InfoTitle>Introduction</InfoTitle>
              <InfoText>
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
              </InfoText>
            </InfoRow>

            <StyledHorizontalLine />
            <InfoRow>
              <InfoTitle>Email</InfoTitle>
              <InfoText>justin@tba.jp</InfoText>
            </InfoRow>
            <StyledHorizontalLine />
            <InfoRow>
              <InfoTitle>Phone number</InfoTitle>
              <InfoText>080-1234-5678</InfoText>
            </InfoRow>

            <StyledHorizontalLine />
            <InfoRow>
              <InfoTitle>Interests</InfoTitle>
              <ChipContainer>
                <Chip>Cooking</Chip>
                <Chip>Football</Chip>
                <Chip>Reading</Chip>
              </ChipContainer>
            </InfoRow>

            <StyledHorizontalLine />
            <InfoRow>
              <InfoTitle>Expertise</InfoTitle>
              <ChipContainer>
                <Chip>Multicultural communication</Chip>
              </ChipContainer>
            </InfoRow>
          </CardBody>
        </Card>
      </Container>
    );
  } else {
    return null;
  }
}

export default ProfileInformation;
