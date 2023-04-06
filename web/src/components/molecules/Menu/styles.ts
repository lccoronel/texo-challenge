import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const MenuContainer = styled.div`
  background-color: ${({ theme }) => theme.color.gray100};
  height: 100%;
  width: 20rem;
`

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`

interface LinkProps {
  isSelected: boolean
}

export const Link = styled(NavLink)<LinkProps>`
  width: 100%;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.blue500 : theme.color.gray500};
  text-decoration: none;
  padding-left: 1rem;
  cursor: pointer;
`
