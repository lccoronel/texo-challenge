import React, { ReactNode } from 'react'

import { Container, DivWithShadowTitle } from './styles'

interface DivWithShadowProps {
  title?: string
  children: ReactNode
}

export const DivWithShadow: React.FC<DivWithShadowProps> = ({
  title,
  children,
}) => {
  return (
    <Container>
      <DivWithShadowTitle>{title}</DivWithShadowTitle>
      {children}
    </Container>
  )
}
