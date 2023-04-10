import type { Meta, StoryObj } from '@storybook/react'

import { Title } from '..'

const meta: Meta<typeof Title> = {
  title: 'Atom/Title',
  component: Title.H2,
}

export default meta
type Story = StoryObj<typeof Title>

export const H2: Story = {
  render: () => <Title.H2>Texo</Title.H2>,
}

export const H3: Story = {
  render: () => <Title.H3>Texo</Title.H3>,
}
