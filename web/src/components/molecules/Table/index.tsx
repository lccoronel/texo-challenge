import React, { ReactNode } from 'react'

import { TableContainer } from './styles'

interface TableProps {
  columnWidth?: number
  children: ReactNode
}

export const Table: React.FC<TableProps> = ({ columnWidth = 50, children }) => {
  return <TableContainer columnWidth={columnWidth}>{children}</TableContainer>
}
