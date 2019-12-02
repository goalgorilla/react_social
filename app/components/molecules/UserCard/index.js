import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BaseButton from '../../atoms/BaseButton';
import Avatar from '../../atoms/Avatar';
import Card from '../../organisms/Card';
import {deviceMinWidth, deviceMaxWidth} from '../../../utils/device';
import HorizontalLine from '../../atoms/HorizontalLine';
import UserStats from '../UserStats';
import TextButton from '../../atoms/TextButton';
import Link from 'next/link';

const ProfileAvatar = styled(Avatar)`
  margin-top: -75px;
  z-index: 500;
  border: 5px solid transparent;
  background-color: ${props => props.theme.color.background.secondary};

  @media ${deviceMinWidth.laptop} {
    margin-top: -100px;
    border: 7px solid transparent;
  }
`;

// A card component to contain content - used, for example, for the login page's form.
const StyledCard = styled(Card)`
  align-content: center;
  background: ${props => props.theme.color.background.secondary};
  color: ${props => props.theme.color.text.one};
  box-shadow: none;
  p,
  h1,
  h2 {
    text-align: center;
  }
  z-index: 900;

  @media ${deviceMinWidth.laptop} {
    border-radius: 5px;
    padding: 30px 40px;
    min-width: 300px;
  }
`;

const FirstName = styled.h1`
  font-weight: ${props => props.theme.font.weight.bold};
  margin-top: 10px;
`;

const LastName = styled.h2`
  margin-top: -15px;
  font-weight: ${props => props.theme.font.weight.default};
  font-size: ${props => props.theme.font.size.large};
`;

const TwitterHandle = styled.p`
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.weight.medium};
  margin-top: -10px;
  color: ${props => props.theme.color.text.three};
`;

const OrganizationTag = styled.p`
  font-weight: ${props => props.theme.font.weight.bold};
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${props => props.theme.color.text.three};
  font-size: ${props => props.theme.font.size.medium};
`;

const Hr = styled(HorizontalLine)`
  display: none;

  @media ${deviceMinWidth.laptop} {
    display: flex;
    border-top: 1px solid #999;
    margin: 0 0 10px 0;
  }
`;

const StyledTextButton = styled(TextButton)`
  margin-top: 30px;
`;

function UserCard(props) {
  // if the profile belongs to the logged in user render the editprofile button
  let profileButton;
  if (props.loggedInUserId == props.profileId) {
    profileButton = (
      <Link href="/editprofile">
        <BaseButton radius="small" fontWeight="bold">
          Edit profile
        </BaseButton>
      </Link>
    );
  } else {
    profileButton = (
      <BaseButton variant="accent" radius="small" fontWeight="bold">
        Private message
      </BaseButton>
    );
  }

  return (
    <StyledUserCard>
      <ProfileAvatar
        src="https://api.master-7rqtwti-jmqq2w45dtvdy.eu-4.platformsh.site/sites/default/files/chrishall.jpg"
        width="128px"
      />
      <FirstName>Justine</FirstName>
      <LastName>Marshall</LastName>
      <TwitterHandle>(@twitterhandle)</TwitterHandle>
      <UserRole>Director at Tokyo Book Association</UserRole>
      <Hr></Hr>
      <UserStats />
      {profileButton}
      <StyledTextButton onClick={() => props.setActivePanel('information')}>
        See full profile of this member
      </StyledTextButton>
    </StyledUserCard>
  );
}

UserCard.defaultProps = {};

UserCard.propTypes = {};

export default UserCard;
