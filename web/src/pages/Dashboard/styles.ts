import styled from 'styled-components'
import { Title } from '../../components/atoms'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  padding: 1rem 3rem;

  @media only screen and (max-width: 1280px) {
    display: grid;
    grid-template-columns: auto;
  }
`

export const TableTitle = styled(Title.H2)`
  font-weight: 400;
  margin-bottom: 0.5rem;
`

export const Form = styled.form`
  width: 100%;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  input {
    height: 100%;
    width: 90%;
    padding-left: 3px;
  }

  button {
    margin-left: 0.5rem;
    background-color: ${({ theme }) => theme.color.blue500};
    border: none;
    height: 100%;
    width: 2.5rem;
    border-radius: 3px;
    cursor: pointer;

    img {
      width: 1rem;
    }
  }
`
