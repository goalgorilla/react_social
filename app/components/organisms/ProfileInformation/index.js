import styled from "styled-components";
import Title from "../../atoms/Title";
import Card from "../Card";
import CardBody from "../../atoms/CardBody";
import StyledHr from "../../atoms/StyledHr";
import InfoTitle from "../../atoms/InfoTitle";
import InfoText from "../../atoms/InfoText";
import InfoRow from "../../molecules/InfoRow";
import ChipContainer from "../../molecules/ChipContainer";
import Chip from "../../atoms/Chip";
import { deviceMaxWidth, deviceMinWidth } from "../../../utils/device";
import { API_URL } from "../../../utils/constants";
import axios from "axios";
import React, { useState, useEffect } from "react";

const StyledInfoTitle = styled(InfoTitle)`
  min-width: 170px;
`;

const Hr = styled(StyledHr)`
  margin: 10px 0;
`;

const Container = styled.div`
  margin-top: 60px;

  @media ${deviceMinWidth.laptop} {
    margin-top: 30px;
  }
`;

const BoldTitle = styled(Title)`
  font-weight: ${props => props.theme.font.weight.bold};
  margin-bottom: 20px;
`;

function ProfileInformation(props) {
  const [data, setData] = useState({
    field_profile_self_introduction: null
  });

  const fetchUserInfo = async () => {
    let result = await axios.get(
      `${API_URL}/jsonapi/user/user/${props.userId}/profile_profiles`,
      {
        headers: {
          Authorization: "Bearer " + props.token
        }
      }
    );
    console.log(result.data.data.attributes);
    setData(result.data.data.attributes);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  if (props.activePanel == "information") {
    return (
      <Container>
        <BoldTitle>Information</BoldTitle>
        <Card>
          <CardBody>
            {data.field_profile_self_introduction && (
              <React.Fragment>
                <InfoRow>
                  <StyledInfoTitle>Introduction</StyledInfoTitle>
                  <InfoText>
                    {data.field_profile_self_introduction.value}
                  </InfoText>
                </InfoRow>
                <Hr />
              </React.Fragment>
            )}
            {data.field_profile_show_email && (
              <React.Fragment>
                <InfoRow>
                  <StyledInfoTitle>Email</StyledInfoTitle>
                  <InfoText>justin@tba.jp</InfoText>
                </InfoRow>
                <Hr />
              </React.Fragment>
            )}
            {data.field_profile_self_introduction && (
              <React.Fragment>
                <InfoRow>
                  <StyledInfoTitle>Phone number</StyledInfoTitle>
                  <InfoText>{data.field_profile_phone_number}</InfoText>
                </InfoRow>
                <Hr />
              </React.Fragment>
            )}
            <InfoRow>
              <StyledInfoTitle>Interests</StyledInfoTitle>
              <ChipContainer>
                <Chip>Cooking</Chip>
                <Chip>Football</Chip>
                <Chip>Reading</Chip>
              </ChipContainer>
            </InfoRow>

            <Hr />
            <InfoRow>
              <StyledInfoTitle>Expertise</StyledInfoTitle>
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
