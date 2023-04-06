import React, { ReactNode } from 'react'
import { Header, Menu } from '../../molecules'
import { Container } from './styles'

interface DefaultScreenProps {
  children: ReactNode
}

export const DefaultScreen: React.FC<DefaultScreenProps> = ({ children }) => {
  return (
    <Container>
      <Header />

      <main>
        <Menu />
        {children}
      </main>
    </Container>
  )
}
