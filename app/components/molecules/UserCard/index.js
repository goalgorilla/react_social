import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";

// A card component to contain content - used, for example, for the login page's form.
const StyledUserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  background: ${props => props.theme.color.background.secondary};
  color: ${props => props.theme.color.text.one};
  p,
  h1,
  h2 {
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  align-self: center;
  border-radius: 50%;
  border: 5px solid transparent;
  background-color: ${props => props.theme.color.background.secondary};
  width: 128px;
  margin-top: -75px;
  z-index: 500;
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

const PrivateMessageButton = styled(Button)`
  background: #ffc042;
  color: ${props => props.theme.color.text.one};
  border-color: #ffc042;
  outline-color: #d5a021;
  box-shadow: none;
  &:hover {
    background: #ffc042;
  }
`;

const UserCard = () => (
  <StyledUserCard>
    <ProfileImage src="https://api.master-7rqtwti-jmqq2w45dtvdy.eu-4.platformsh.site/sites/default/files/chrishall.jpg" />
    <FirstName>Justine</FirstName>
    <LastName>Marshall</LastName>
    <TwitterHandle>(@justinemarshall)</TwitterHandle>
    <OrganizationTag>Director at Tokyo Book Association</OrganizationTag>
    <PrivateMessageButton>
      <b>Private message</b>
    </PrivateMessageButton>
  </StyledUserCard>
);

UserCard.defaultProps = {};

UserCard.propTypes = {};

export default UserCard;
