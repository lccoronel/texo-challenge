import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  flex: 1;

  h2 {
    font-weight: 700;
    margin-bottom: 1rem;
  }

  table {
    tr {
      th {
        text-align: center;
        div {
          display: flex;
          flex-direction: column;

          input,
          select {
            margin-top: 1rem;
          }

          select {
            text-align: center;
          }
        }
      }
    }
  }
`
