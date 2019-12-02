import React from 'react';
import styled from 'styled-components';
import Title from '../../atoms/Title';
import SortAndFilter from '../../molecules/SortAndFilter';
import Card from '../Card';
import CardBody from '../../atoms/CardBody';
import {deviceMaxWidth, deviceMinWidth} from '../../../utils/device';

const Container = styled.div(
  props => `
  margin-top: calc(${props.theme.layout.profile.navHeight} + 20px);

  @media ${deviceMinWidth.laptop} {
    margin-top: calc(${props.theme.layout.profile.navHeight} - 10px);
  }
`,
);

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;

  & > h2,
  p {
    margin-top: 0;
  }
`;

const Reset = styled.p`
  font-size: ${props => props.theme.font.size.medium};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.theme.color.brand.primary};
  cursor: pointer;
`;

function ProfileEvents() {
  const count = 0;
  return (
    <Container>
      <HeaderRow>
        <Title>{count} Events</Title>
        <Reset>Reset</Reset>
      </HeaderRow>
      <SortAndFilter />
      <Card>
        <CardBody>Temp Event Card 1</CardBody>
      </Card>
      <Card>
        <CardBody>Temp Event Card 1</CardBody>
      </Card>
      <Card>
        <CardBody>Temp Event Card 1</CardBody>
      </Card>
    </Container>
  );
}

export default ProfileEvents;
