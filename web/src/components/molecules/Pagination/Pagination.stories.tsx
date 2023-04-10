import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '..'

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
  args: {
    totalPages: 10,
    onPageChange(page) {
      console.log(page)
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Primary: Story = {
  render: () => <Pagination totalPages={10} onPageChange={console.log} />,
}
