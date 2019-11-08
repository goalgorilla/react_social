// user.js - profile page
import { connect } from "react-redux";
import Layout from "../components/Layout";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { useRouter } from "next/router";
import ProfileBanner from "../components/atoms/ProfileBanner";
import UserCard from "../components/molecules/UserCard";
import styled from "styled-components";
import ProfileNavigationBar from "../components/molecules/ProfileNavigationBar";
import ProfileInformation from "../components/molecules/ProfileInformation";
import ProfileStream from "../components/organisms/ProfileStream";
import ProfileEvents from "../components/organisms/ProfileEvents";
import ProfileTopics from "../components/organisms/ProfileTopics";
import ProfileGroups from "../components/organisms/ProfileGroups";
import React, { useState, useEffect } from "react";
import { deviceMinWidth, deviceMaxWidth } from "../utils/device";

const ProfileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 150px;

  @media ${deviceMinWidth.laptop} {
    flex-direction: row;
    margin-top: 320px;
  }
`;

const ProfileLeftColumn = styled.div`
  @media ${deviceMinWidth.laptop} {
    margin-right: 30px;
    margin-top: -45px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.16),
      0 2px 4px rgba(0, 0, 0, 0.32);
    border-radius: 5px;
  }
`;

const ProfileRightColumn = styled.div`
  margin-top: 20px;
  width: 100%;

  @media ${deviceMinWidth.laptop} {
    margin-top: -45px;
  }
`;

function User({ name }) {
  const router = useRouter();

  const [activePanel, setActivePanel] = useState("stream");

  return (
    <Layout title={name + " | Open Social"}>
      <ProfileBanner id={router.query.id} />
      <ProfileContentContainer>
        <ProfileLeftColumn>
          <UserCard />
          {/* <UpcomingEvents /> */}
          {/* <RecentlyCreatedTopics /> */}
          {/* <RecentlyJoinedGroups /> */}
        </ProfileLeftColumn>
        <ProfileRightColumn>
          <ProfileNavigationBar
            activePanel={activePanel}
            setActivePanel={setActivePanel}
          />
          <ProfileStream activePanel={activePanel} />
          <ProfileEvents activePanel={activePanel} />
          <ProfileTopics activePanel={activePanel} />
          <ProfileGroups activePanel={activePanel} />
          <ProfileInformation activePanel={activePanel} />
        </ProfileRightColumn>
      </ProfileContentContainer>
    </Layout>
  );
}

User.getInitialProps = async ctx => {
  // Get name of the user from the id passed in url
  return axios
    .get(`${API_URL}/jsonapi/user/user/${ctx.query.id}`)
    .then(response => {
      const name = response.data.data.attributes.name;
      return { name };
    })
    .catch(err => {
      console.log(err);
    });
};

export default connect(state => state)(User);
