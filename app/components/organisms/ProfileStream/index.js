import React from 'react';
import styled from 'styled-components';
import Title from '../../atoms/Title';
import {deviceMaxWidth, deviceMinWidth} from '../../../utils/device';

const Container = styled.div(
  props => `
  margin-top: calc(${props.theme.layout.profile.navHeight} + 20px);

  @media ${deviceMinWidth.laptop} {
    margin-top: calc(${props.theme.layout.profile.navHeight} - 10px);
  }
`,
);

function ProfileStream() {
  return (
    <Container>
      <Title>Stream</Title>
    </Container>
  );
}

export default ProfileStream;
