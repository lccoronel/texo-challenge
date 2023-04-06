import styled from 'styled-components'
import { Title } from '../../atoms'

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 4rem;
  background-color: ${({ theme }) => theme.color.gray700};
  display: flex;
  align-items: center;
  padding-left: 2rem;
`

export const HeaderTitle = styled(Title.H2)`
  color: ${({ theme }) => theme.color.white};
`
