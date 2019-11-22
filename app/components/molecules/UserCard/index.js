import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import BaseButton from "../../atoms/BaseButton";
import Avatar from "../../atoms/Avatar";
import Card from "../../organisms/Card"

const ProfileAvatar = styled(Avatar)`
  margin-top: -75px;
  z-index: 500;
  border: 5px solid transparent;
  background-color: ${props => props.theme.color.background.secondary};
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
  font-size: ${props => props.theme.font.size.medium};
  font-weight: ${props => props.theme.font.weight.medium};
  margin-top: -10px;
  color: ${props => props.theme.color.text.three};
`;

const OrganizationTag = styled.p`
  font-weight: ${props => props.theme.font.weight.bold};
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${props => props.theme.color.text.three};
`;

const UserCard = () => (
  <StyledCard>
    <ProfileAvatar
      src="https://api.master-7rqtwti-jmqq2w45dtvdy.eu-4.platformsh.site/sites/default/files/chrishall.jpg"
      width="128px"
    />
    <FirstName>Justine</FirstName>
    <LastName>Marshall</LastName>
    <TwitterHandle>(@justinemarshall)</TwitterHandle>
    <OrganizationTag>Director at Tokyo Book Association</OrganizationTag>
    <BaseButton variant="accent" radius="small">
      <b>Private message</b>
    </BaseButton>
  </StyledCard>
);

UserCard.defaultProps = {};

UserCard.propTypes = {};

export default UserCard;
