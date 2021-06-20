import React from 'react';

import { Meta } from '@storybook/react';

import MyButton from '../../Components/Button';
import IButton from '../../interfaces/IButton';
 

export default {
  title: 'Components/Button',
  component: MyButton,
  args: { label: 'Button'} 
} as Meta;

export const Primary: React.VFC<IButton> = (args) => <MyButton {...args}></MyButton>