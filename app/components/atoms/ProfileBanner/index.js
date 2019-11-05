import React from "react";
import styled from "styled-components";

// The body for the Card component
const StyledProfileBanner = styled.img`
  width: 100%;
  height: auto;
  background: grey;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProfileBannerContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  overflow: hidden;
  max-height: 320px;
`;

const ProfileBanner = () => {
  const tempBanner =
    "https://images.unsplash.com/photo-1486411959861-41a3eb8da389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80";
  return (
    <ProfileBannerContainer>
      <StyledProfileBanner src={tempBanner} alt="profile banner image" />
    </ProfileBannerContainer>
  );
};

export default ProfileBanner;
