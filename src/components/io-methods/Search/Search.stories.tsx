import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Component, { Result } from '.'

export default {
  title: 'TransactionUI/Search',
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
  results: [
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

export const Search = Template.bind({})
Search.args = {
  label: 'Select a user',
  results: [
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

const users: Result[] = [
  {
    value: '1',
    label: 'Ye 001',
    description: 'ye+001@utilhq.com',
    image: {
      url: 'https://picsum.photos/100',
    },
  },
  {
    value: '2',
    label: 'Ye 002',
    description: 'ye+002@utilhq.com',
    image: {
      url: 'https://picsum.photos/100',
    },
  },
  {
    value: '3',
    label: 'Ye 003',
    description: 'ye+003@utilhq.com',
    image: {
      url: 'https://picsum.photos/100',
    },
  },
  {
    value: '4',
    label: 'Ye 004',
    description: 'ye+004@utilhq.com',
    image: {
      url: 'https://picsum.photos/100',
    },
  },
  {
    value: '5',
    label: 'Ye 005',
    description: 'ye+005@utilhq.com',
    image: {
      url: 'https://picsum.photos/100',
    },
  },
]

export const Thumbnails = Template.bind({})
Thumbnails.args = {
  label: 'Thumbnails',
  results: users,
  onUpdatePendingReturnValue: () => {
    /* */
  },
  onStateChange: () => {
    /**/
  },
}

export const SmallThumbnails = Template.bind({})
SmallThumbnails.args = {
  label: 'Small thumbnails',
  results: users.map(u => ({
    ...u,
    image: { ...u.image, size: 'small' },
  })) as Result[],
  onUpdatePendingReturnValue: () => {
    /* */
  },
  onStateChange: () => {
    /**/
  },
}

export const MediumThumbnails = Template.bind({})
MediumThumbnails.args = {
  label: 'Medium thumbnails',
  results: users.map(u => ({
    ...u,
    image: { ...u.image, size: 'medium' },
  })) as Result[],
  onUpdatePendingReturnValue: () => {
    /* */
  },
  onStateChange: () => {
    /**/
  },
}

export const LargeThumbnails = Template.bind({})
LargeThumbnails.args = {
  label: 'Large thumbnails',
  results: users.map(u => ({
    ...u,
    image: { ...u.image, size: 'large' },
  })) as Result[],
  onUpdatePendingReturnValue: () => {
    /* */
  },
  onStateChange: () => {
    /**/
  },
}
