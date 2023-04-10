import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme/default'
import { GlobalStyle } from './global'

interface MyThemeProviderProps {
  children: ReactNode
}

export const MyThemeProvider: React.FC<MyThemeProviderProps> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  )
}
