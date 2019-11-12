import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";
import { deviceMinWidth, deviceMaxWidth } from "../../../utils/device";
import StyledHr from "../../atoms/StyledHr";
import UserStats from "../UserStats";
import TextButton from "../../atoms/TextButton";

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
  z-index: 900;

  @media ${deviceMinWidth.laptop} {
    border-radius: 5px;
    padding: 30px;
    min-width: 300px;
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

  @media ${deviceMinWidth.laptop} {
    margin-top: -100px;
    border: 7px solid transparent;
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

const UserRole = styled.p`
  font-weight: ${props => props.theme.font.weight.bold};
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${props => props.theme.color.text.three};
  font-size: ${props => props.theme.font.size.medium};
`;

const PrivateMessageButton = styled(Button)`
  background: #ffc042;
  color: ${props => props.theme.color.text.one};
  font-size: ${props => props.theme.font.size.medium};
  border-color: #ffc042;
  outline-color: #d5a021;
  box-shadow: none;
  &:hover {
    background: #ffc042;
  }
`;

const Hr = styled(StyledHr)`
  display: none;

  @media ${deviceMinWidth.laptop} {
    display: flex;
    border-top: 1px solid #999;
    margin: 10px 0 10px 0;
  }
`;

const UserCard = props => (
  <StyledUserCard>
    <ProfileImage src="https://api.master-7rqtwti-jmqq2w45dtvdy.eu-4.platformsh.site/sites/default/files/chrishall.jpg" />
    <FirstName>Justine</FirstName>
    <LastName>Marshall</LastName>
    <TwitterHandle>(@justinemarshall)</TwitterHandle>
    <UserRole>Director at Tokyo Book Association</UserRole>
    <Hr></Hr>
    <UserStats />
    <PrivateMessageButton>
      <b>Private message</b>
    </PrivateMessageButton>
    <TextButton onClick={() => props.setActivePanel("information")}>
      See full profile of this member
    </TextButton>
  </StyledUserCard>
);

UserCard.defaultProps = {};

UserCard.propTypes = {};

export default UserCard;
