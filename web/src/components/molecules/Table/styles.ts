import styled from 'styled-components'

interface TableContainerProps {
  columnWidth: number
}

export const TableContainer = styled.table<TableContainerProps>`
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
    width: ${({ columnWidth }) => columnWidth}%;
  }

  tr {
    background-color: ${({ theme }) => theme.color.gray200};
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.color.white};
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${({ theme }) => theme.color.gray200};
    font-weight: 500;
  }

  td {
    font-weight: 400;
  }
`
