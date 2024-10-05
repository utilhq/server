import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Component from '.'

export default {
  title: 'TransactionUI/Select.Single',
  component: Component,
} as Meta<typeof Component>

const Template: StoryFn<typeof Component> = args => (
  <div>
    <Component {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Select a role',
  searchable: false,
  options: [
    {
      label: 'Admin',
      value: 'admin',
    },
    {
      label: 'Editor',
      value: 'editor',
    },
    {
      label: 'Viewer',
      value: 'viewer',
    },
  ],
  onUpdatePendingReturnValue: () => {
    /**/
  },
  onStateChange: () => {
    /**/
  },
}

export const SelectUser = Template.bind({})
SelectUser.args = {
  searchable: true,
  label: 'Select a user',
  options: [
    {
      value: '1',
      label: 'Ye 001',
    },
    {
      value: '2',
      label: 'Ye 002',
    },
    {
      value: '3',
      label: 'Ye 003',
    },
    {
      value: '4',
      label: 'Ye 004',
    },
    {
      value: '5',
      label: 'Ye 005',
    },
    {
      value: '6',
      label: 'Ye 006',
    },
    {
      value: '7',
      label: 'Ye 007',
    },
    {
      value: '8',
      label: 'Ye 008',
    },
    {
      value: '9',
      label: 'Ye 009',
    },
    {
      value: '10',
      label: 'Ye 010',
    },
  ],
  onUpdatePendingReturnValue: () => {
    /* */
  },
  onStateChange: () => {
    /**/
  },
}

export const SelectUsers = Template.bind({})
SelectUsers.args = {
  searchable: true,
  label: 'Select a user',
  options: [
    {
      value: '1',
      label: 'Ye 001',
      description: 'ye+001@utilhq.com',
      image: {
        url: 'https://placehold.co/100',
        size: 'large',
      },
    },
    {
      value: '2',
      label: 'Ye 002',
      description: 'ye+002@utilhq.com',
      image: {
        url: 'https://placehold.co/100',
        size: 'medium',
      },
    },
    {
      value: '3',
      label: 'Ye 003',
      description: 'ye+003@utilhq.com',
      image: {
        url: 'https://placehold.co/100',
        size: 'medium',
      },
    },
    {
      value: '4',
      label: 'Ye 004',
      description: 'ye+004@utilhq.com',
      image: {
        url: 'https://placehold.co/100',
        size: 'medium',
      },
    },
    {
      value: '5',
      label: 'Ye 005',
      description: 'ye+005@utilhq.com',
      image: {
        url: 'https://placehold.co/100',
        size: 'medium',
      },
    },
  ],
  onUpdatePendingReturnValue: () => {
    /* */
  },
  onStateChange: () => {
    /**/
  },
}
