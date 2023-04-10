import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.gray200};
  border: 1px solid ${({ theme }) => theme.color.gray300};

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .move-button {
      cursor: pointer;
      background-color: transparent;
      border: none;
      margin: 0 1rem;

      img {
        width: 12px;
      }
    }
  }
`

interface PageButtonProps {
  isCurrentPage: boolean
}

export const PageButton = styled.button<PageButtonProps>`
  cursor: pointer;
  background-color: ${({ isCurrentPage, theme }) =>
    isCurrentPage ? theme.color.blue500 : 'trasparent'};
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 400;
  color: ${({ theme, isCurrentPage }) =>
    isCurrentPage ? theme.color.white : theme.color.gray500};
  font-size: 0.8rem;
`
