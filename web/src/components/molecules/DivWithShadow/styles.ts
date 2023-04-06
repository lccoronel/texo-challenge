import styled from 'styled-components'

import { Title } from '../../atoms'

export const Container = styled.div`
  min-width: 42rem;
  padding: 1rem;

  -webkit-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.16);
`

export const DivWithShadowTitle = styled(Title.H3)`
  margin-bottom: 1rem;
`
