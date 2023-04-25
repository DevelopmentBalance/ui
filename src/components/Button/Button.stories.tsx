import React from 'react'
import type { Meta, StoryFn } from '@storybook/react';

import Button, { IButton, IButtonSize } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    bgColor: { control: 'color' },
  },
} as Meta

const Template: StoryFn<IButton> = (args) => (
  <Button {...args} onClick={() => alert('test')} />
)

export const ButtonSmall = Template.bind({})
ButtonSmall.args = {
  children: 'Button Text',
  size: IButtonSize.SMALL,
}

export const ButtonMedium = Template.bind({})
ButtonMedium.args = {
  children: 'Button Text',
  size: IButtonSize.MEDIUM,
}

