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
import ProfileInformation from "../components/organisms/ProfileInformation";
import ProfileStream from "../components/organisms/ProfileStream";
import ProfileEvents from "../components/organisms/ProfileEvents";
import ProfileTopics from "../components/organisms/ProfileTopics";
import ProfileGroups from "../components/organisms/ProfileGroups";
import RecentActivity from "../components/organisms/RecentActivity";
import StyledHr from "../components/atoms/StyledHr";
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
`;

function User({ name, id, token, profileId }) {
  const [activePanel, setActivePanel] = useState("stream");

  return (
    <Layout title={name + " | Open Social"}>
      <ProfileBanner id={profileId} />
      <ProfileContentContainer>
        <ProfileLeftColumn>
          <UserCard
            setActivePanel={setActivePanel}
            loggedInUser={id}
            id={profileId}
          />
          <RecentActivityContainer>
            <RecentActivity activity="events" setActivePanel={setActivePanel} />
            <StyledHr />
            <RecentActivity activity="topics" setActivePanel={setActivePanel} />
            <StyledHr />
            <RecentActivity activity="groups" setActivePanel={setActivePanel} />
          </RecentActivityContainer>
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
          <ProfileInformation
            activePanel={activePanel}
            userId={profileId}
            token={token}
          />
        </ProfileRightColumn>
      </ProfileContentContainer>
    </Layout>
  );
}

User.getInitialProps = async ctx => {
  const token = ctx.store.getState().authentication.token;
  const id = ctx.store.getState().authentication.id;

  // if no id is passed set profileId to that of logged in user
  const profileId = typeof ctx.query.id === "undefined" ? id : ctx.query.id;

  // Get name of the user from the id passed in url
  return axios
    .get(`${API_URL}/jsonapi/user/user/${profileId}`)
    .then(response => {
      const name = response.data.data.attributes.name;
      return { name, id, token, profileId };
    })
    .catch(err => {
      console.log(err);
    });
};

export default connect(state => state)(User);
