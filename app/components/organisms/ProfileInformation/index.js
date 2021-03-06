import styled from 'styled-components';
import Title from '../../atoms/Title';
import {useRouter} from 'next/router';
import Card from '../Card';
import CardBody from '../../atoms/CardBody';
import HorizontalLine from '../../atoms/HorizontalLine';
import InfoTitle from '../../atoms/InfoTitle';
import InfoRow from '../../molecules/InfoRow';
import BadgeContainer from '../../molecules/BadgeContainer';
import Badge from '../../atoms/Badge';
import {deviceMaxWidth, deviceMinWidth} from '../../../utils/device';
import {API_URL} from '../../../utils/constants';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useUser} from '../../auth/userContext';

// const StyledInfoTitle = styled(InfoTitle)`
//   min-width: 170px;
// `;

const Hr = styled(HorizontalLine)`
  margin: 10px 0;
`;

const Container = styled.div`
  margin-top: 60px;

  @media ${deviceMinWidth.laptop} {
    margin-top: 30px;
  }
`;

function ProfileInformation(props) {
  const router = useRouter();
  const user = useUser();

  const [data, setData] = useState({
    field_profile_self_introduction: null,
  });

  const fetchUserInfo = async () => {
    let result = await axios.get(
      `${API_URL}/jsonapi/user/user/${router.query.id}/profile_profiles`,
      {
        headers: {
          Authorization: 'Bearer ' + user.token,
        },
      },
    );
    setData(result.data.data.attributes);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <Container>
      <Title>Information</Title>
      <Card>
        <CardBody>
          {data.field_profile_self_introduction && (
            <React.Fragment>
              <InfoRow>
                <InfoTitle>Introduction</InfoTitle>
                <p>{data.field_profile_self_introduction.value}</p>
              </InfoRow>
              <Hr />
            </React.Fragment>
          )}
          {data.field_profile_show_email && (
            <React.Fragment>
              <InfoRow>
                <InfoTitle>Email</InfoTitle>
                <p>justin@tba.jp</p>
              </InfoRow>
              <Hr />
            </React.Fragment>
          )}
          {data.field_profile_self_introduction && (
            <React.Fragment>
              <InfoRow>
                <InfoTitle>Phone number</InfoTitle>
                <p>{data.field_profile_phone_number}</p>
              </InfoRow>
              <Hr />
            </React.Fragment>
          )}
          <InfoRow>
            <InfoTitle>Interests</InfoTitle>
            <BadgeContainer>
              <Badge>Cooking</Badge>
              <Badge>Football</Badge>
              <Badge>Reading</Badge>
            </BadgeContainer>
          </InfoRow>

          <Hr />
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
