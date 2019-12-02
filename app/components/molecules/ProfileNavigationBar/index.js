import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import {deviceMaxWidth, deviceMinWidth} from '../../../utils/device';

const Menu = styled.ul`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  height: ${props => props.theme.layout.profile.navHeight};
  margin: 0;
  padding: 0;
  list-style-type: none;
  background: #0f6892;
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 490px) {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0) 30px
      ),
      linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) 30px);
  }

  @media ${deviceMinWidth.laptop} {
    position: relative;
    border-radius: 5px 5px 0px 0px;
    justify-content: center;
    align-items: center;
    min-height: 45px;
    padding: 0;
  }
`;

const MenuItem = styled.li`
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;

  a {
    color: white;
    font-size: 0.95rem;
    font-weight: ${props => props.theme.font.weight.bold};
    line-height: calc(${props => props.theme.layout.profile.navHeight});
    opacity: ${props => (props.active ? '1' : '0.5')};
    border-bottom: ${props =>
      props.active ? '3px solid white' : '3px solid transparent'};
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    opacity: 1;
  }
`;

function ProfileNavigationBar(props) {
  return (
    <Menu>
      <MenuItem
        onClick={() => props.setCurrentTab('stream')}
        active={props.currentTab === 'stream'}
      >
        <Link href={`/user?id=${props.userId}`} scroll={false}>
          <a>Stream</a>
        </Link>
      </MenuItem>
      <MenuItem
        onClick={() => props.setCurrentTab('events')}
        active={props.currentTab === 'events'}
      >
        <Link
          href={`/userevents?id=${props.userId}`}
          as={`/user?id=${props.userId}/events`}
          scroll={false}
        >
          <a>Events</a>
        </Link>
      </MenuItem>
      <MenuItem
        onClick={() => props.setCurrentTab('topics')}
        active={props.currentTab === 'topics'}
      >
        <Link
          href={`/usertopics?id=${props.userId}`}
          as={`/user?id=${props.userId}/topics`}
          scroll={false}
        >
          <a>Topics</a>
        </Link>
      </MenuItem>
      <MenuItem
        onClick={() => props.setCurrentTab('groups')}
        active={props.currentTab === 'groups'}
      >
        <Link
          href={`/usergroups?id=${props.userId}`}
          as={`/user?id=${props.userId}/groups`}
          scroll={false}
        >
          <a>Groups</a>
        </Link>
      </MenuItem>
      <MenuItem
        onClick={() => props.setCurrentTab('information')}
        active={props.currentTab === 'information'}
      >
        <Link
          href={`/userinformation?id=${props.userId}`}
          as={`/user?id=${props.userId}/information`}
          scroll={false}
        >
          <a>Information</a>
        </Link>
      </MenuItem>
    </Menu>
  );
}

ProfileNavigationBar.propTypes = {
  userId: PropTypes.string,
  setCurrentTab: PropTypes.string,
  currentTab: PropTypes.string,
};

export default ProfileNavigationBar;
