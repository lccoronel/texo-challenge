import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  background-color: ${({ theme }) => theme.color.gray};
  display: flex;
  align-items: center;
  padding-left: 1rem;

  h2 {
    color: ${({ theme }) => theme.color.white};
    font-weight: 400;
  }
`
