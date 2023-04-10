import { render, screen } from '@testing-library/react'
import { Title } from '..'
import 'jest-styled-components'
import { defaultTheme } from '../../../styles/theme/default'

describe('Title', () => {
  it('Should render Title.H2 with "texo" test', () => {
    render(<Title.H2 theme={defaultTheme}>texo</Title.H2>)

    expect(screen.getByRole('heading', { name: 'texo' })).toBeInTheDocument()
  })

  it('Should render Title.H3 with "texo" test', () => {
    render(<Title.H2 theme={defaultTheme}>texo</Title.H2>)

    expect(screen.getByRole('heading', { name: 'texo' })).toBeInTheDocument()
  })
})
