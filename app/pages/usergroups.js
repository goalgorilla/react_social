// user.js - profile page
import { connect } from "react-redux";
import Layout from "../components/Layout";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { useRouter } from "next/router";
import ProfileHero from "../components/atoms/ProfileHero";
import UserCard from "../components/molecules/UserCard";
import styled from "styled-components";
import ProfileNavigationBar from "../components/molecules/ProfileNavigationBar";
import ProfileInformation from "../components/molecules/ProfileInformation";
import ProfileStream from "../components/organisms/ProfileStream";
import ProfileEvents from "../components/organisms/ProfileEvents";
import ProfileTopics from "../components/organisms/ProfileTopics";
import ProfileGroups from "../components/organisms/ProfileGroups";
import React, { useState, useEffect } from "react";

const ProfileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 150px;
`;

const ProfileLeftColumn = styled.div``;

const ProfileRightColumn = styled.div`
  margin-top: 20px;
`;

const getAvailableTabs = () => ({
    stream: ProfileStream,
    events: ProfileEvents,
    topics: ProfileTopics,
    groups: ProfileGroups,
    information: ProfileInformation
});

function UserGroups({ name }) {
    const router = useRouter();

    const [currentTab, setCurrentTab] = useState("groups");
    const tabs = getAvailableTabs();

    if (typeof tabs[currentTab] === "undefined") {
        throw new Error("Invalid tab was somehow selected, check business logic");
    }

    return (
        <Layout title={name + " | Open Social"}>
            <ProfileHero id={router.query.id} />
            <ProfileContentContainer>
                <ProfileLeftColumn>
                    <UserCard />
                    {/* <UpcomingEvents /> */}
                    {/* <RecentlyCreatedTopics /> */}
                    {/* <RecentlyJoinedGroups /> */}
                </ProfileLeftColumn>
                <ProfileRightColumn>
                    <ProfileNavigationBar
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                        userId={router.query.id}
                    />
                    <ProfileGroups />
                </ProfileRightColumn>
            </ProfileContentContainer>

        </Layout >
    );
}

UserGroups.getInitialProps = async ctx => {
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

export default connect(state => state)(UserGroups);
