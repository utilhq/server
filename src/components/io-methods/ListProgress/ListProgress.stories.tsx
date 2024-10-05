import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Component from '.'

export default {
  title: 'TransactionUI/ListProgress',
  component: Component,
} as Meta<typeof Component>

const Template: StoryFn<typeof Component> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Refunds',
  items: [
    {
      label: 'ye+001@utilhq.com',
      isComplete: true,
      resultDescription: 'Refunded $5.00',
    },
    {
      label: 'ye+002@utilhq.com',
      isComplete: true,
      resultDescription: 'Refunded $5.00',
    },
    {
      label: 'ye+003@utilhq.com',
      isComplete: false,
      resultDescription: null,
    },
    {
      label: 'ye+004@utilhq.com',
      isComplete: false,
      resultDescription: null,
    },
  ],
}
