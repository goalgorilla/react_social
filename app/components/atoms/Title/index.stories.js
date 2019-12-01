import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Title from '.';

storiesOf('Title', module)
  .addDecorator(withInfo)
  .add('default', () => <Title>Log in</Title>);
