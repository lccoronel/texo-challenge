import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '..'

const meta: Meta<typeof Header> = {
  title: 'Molecules/Header',
  component: Header,
}

export default meta
type Story = StoryObj<typeof Header>

export const Primary: Story = {
  render: () => <Header />,
}
