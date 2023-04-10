import type { Meta, StoryObj } from '@storybook/react'

import { Table } from '..'

const meta: Meta<typeof Table> = {
  title: 'Molecules/Table',
  component: Table,
  args: {},
}

export default meta
type Story = StoryObj<typeof Table>

export const Primary: Story = {
  render: () => (
    <Table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
    </Table>
  ),
}
