import type { Meta, StoryObj } from '@storybook/react'

import { DivWithShadow } from '..'

const meta: Meta<typeof DivWithShadow> = {
  title: 'Molecules/DivWithShadow',
  component: DivWithShadow,
}

export default meta
type Story = StoryObj<typeof DivWithShadow>

export const Primary: Story = {
  render: () => (
    <DivWithShadow>
      <h1>texo</h1>
    </DivWithShadow>
  ),
}
