import React from 'react';
import styled from 'styled-components';
import Title from '../../atoms/Title';

const Container = styled.div(
  props => `
  margin-top: calc(${props.theme.layout.profile.navHeight} + 20px);
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
