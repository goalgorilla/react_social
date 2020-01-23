// user.js - profile page
import PropTypes from 'prop-types';
import axios from 'axios';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import React, {useState} from 'react';
import Layout from '../../../components/Layout';
import {API_URL} from '../../../utils/constants';
import ProfileHero from '../../../components/atoms/ProfileHero';
import UserCard from '../../../components/molecules/UserCard';
import ProfileNavigationBar from '../../../components/molecules/ProfileNavigationBar';
import ProfileInformation from '../../../components/organisms/ProfileInformation';
import ProfileStream from '../../../components/organisms/ProfileStream';
import ProfileEvents from '../../../components/organisms/ProfileEvents';
import ProfileTopics from '../../../components/organisms/ProfileTopics';
import ProfileGroups from '../../../components/organisms/ProfileGroups';
import {deviceMinWidth, deviceMaxWidth} from '../../../utils/device';
import HorizontalLine from '../../../components/atoms/HorizontalLine';
import RecentActivity from '../../../components/organisms/RecentActivity';
import {getCookie} from '../../../utils/cookie';

const ProfileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.layout.padding};

  @media ${deviceMinWidth.laptop} {
    flex-direction: row;
  }
`;

const ProfileLeftColumn = styled.div`
  @media ${deviceMinWidth.laptop} {
    margin-right: 30px;
    margin-top: -45px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.16),
      0 2px 4px rgba(0, 0, 0, 0.32);
    border-radius: 5px;
    min-width: 380px;
  }
`;

const ProfileRightColumn = styled.div`
  margin-top: 20px;
  width: 100%;

  @media ${deviceMinWidth.laptop} {
    margin-top: -45px;
  }
`;

const RecentActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.color.background.primary};
  padding: 0 40px;
  border-radius: 0px 0px 5px 5px;

  @media ${deviceMaxWidth.laptop} {
    display: none;
  }
`;

const getAvailableTabs = () => ({
  stream: ProfileStream,
  events: ProfileEvents,
  topics: ProfileTopics,
  groups: ProfileGroups,
  information: ProfileInformation,
});

function UserInformation({name}) {
  const router = useRouter();

  const [currentTab, setCurrentTab] = useState('information');
  const tabs = getAvailableTabs();

  if (typeof tabs[currentTab] === 'undefined') {
    throw new Error('Invalid tab was somehow selected, check business logic');
  }

  return (
    <Layout title={`${name} | Open Social`}>
      <ProfileHero id={router.query.id} />
      <ProfileContentContainer>
        <ProfileLeftColumn>
          <UserCard />
          <RecentActivityContainer>
            <RecentActivity activity="events" setCurrentTab={setCurrentTab} />
            <HorizontalLine />
            <RecentActivity activity="topics" setCurrentTab={setCurrentTab} />
            <HorizontalLine />
            <RecentActivity activity="groups" setCurrentTab={setCurrentTab} />
          </RecentActivityContainer>
        </ProfileLeftColumn>
        <ProfileRightColumn>
          <ProfileNavigationBar
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            userId={router.query.id}
          />
          <ProfileInformation />
        </ProfileRightColumn>
      </ProfileContentContainer>
    </Layout>
  );
}

UserInformation.getInitialProps = async ctx => {
  // Get name of the user from the id passed in url
  return axios
    .get(
      `${API_URL}/jsonapi/user/user?filter[drupal_internal__uid][value]=${ctx.query.id}`,
      {
        headers: {
          Authorization: 'Bearer ' + getCookie('token', ctx.req),
        },
      },
    )
    .then(response => {
      const name = response.data.data[0].attributes.name;
      return {name};
    })
    .catch(err => {
      throw new Error(`Error occured while fetching user`);
    });
};

UserInformation.propTypes = {
  name: PropTypes.string,
};

export default UserInformation;
