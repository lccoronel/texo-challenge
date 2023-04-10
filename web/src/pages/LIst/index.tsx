import React, { useCallback, useEffect, useState } from 'react'

import { Container } from './styles'
import { Title } from '../../components/atoms'
import { Table } from '../../components/molecules'
import { api } from '../../services/api'

export const LIst: React.FC = () => {
  const [winnersList, setWinnersList] = useState<List.WinnersList | undefined>()
  const [year, setYear] = useState('')
  const [winner, setWinner] = useState('')

  const getAllMovies = useCallback(async () => {
    const response = await api.get(`movies?winner=${winner}&year=${year}`)
    setWinnersList(response.data)
  }, [year, winner])

  useEffect(() => {
    getAllMovies()
  }, [getAllMovies])

  if (!winnersList) {
    return (
      <div>
        <Title.H3>Empty</Title.H3>
      </div>
    )
  }

  return (
    <Container>
      <Title.H2>List movies</Title.H2>
      <Table columnWidth={25}>
        <tr>
          <th>ID</th>
          <th>
            <div>
              Year
              <input
                placeholder="Filter By year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </th>
          <th>Title</th>
          <th>
            <div>
              Winner?
              <select
                name="winner"
                id="winner"
                value={winner}
                onChange={(e) => setWinner(e.target.value)}
              >
                <option value="">Yes/No</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </th>
        </tr>
        {winnersList.content.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.id}</td>
            <td>{movie.year}</td>
            <td>{movie.title}</td>
            <td>{movie.winner ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </Table>
    </Container>
  )
}
