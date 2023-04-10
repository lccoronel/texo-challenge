import React, { useEffect, useState } from 'react'

import { api } from '../../services/api'
import searchImg from '../../assets/search.png'
import { DivWithShadow, Table } from '../../components/molecules'
import { Container, TableTitle, Form } from './styles'

export const Dashboard: React.FC = () => {
  const [years, setYears] = useState<Dashboard.Year[]>([])
  const [studios, setStudios] = useState<Dashboard.Studio[]>([])
  const [awards, setAwards] = useState<Dashboard.Awards | undefined>()
  const [winners, setWinners] = useState<Dashboard.Winners | undefined>()
  const [winnerYear, setWinnerYear] = useState('')

  useEffect(() => {
    Promise.all([
      api.get('movies?projection=years-with-multiple-winners'),
      api.get('movies?projection=studios-with-win-count'),
      api.get('movies?projection=max-min-win-interval-for-producers'),
    ]).then(([response1, response2, response3]) => {
      setYears(response1.data.years)
      setStudios(response2.data.studios)
      setAwards(response3.data)
    })
  }, [])

  async function getWinnerByYear(e: any) {
    e.preventDefault()

    const response = await api.get(`movies?winner=true&year=${winnerYear}`)
    setWinners(response.data)
  }

  return (
    <Container>
      <DivWithShadow title="List years with multiple winners">
        <Table>
          <tr>
            <th>Year</th>
            <th>Win Count</th>
          </tr>
          {years.map((year) => (
            <tr key={year.year}>
              <td>{year.year}</td>
              <td>{year._count.winner}</td>
            </tr>
          ))}
        </Table>
      </DivWithShadow>

      <DivWithShadow title="Top 3 studios with winners">
        <Table>
          <tr>
            <th>Name</th>
            <th>Win Count</th>
          </tr>
          {studios.map((studio) => (
            <tr key={studio.studios}>
              <td>{studio.studios}</td>
              <td>{studio._count.winner}</td>
            </tr>
          ))}
        </Table>
      </DivWithShadow>

      <DivWithShadow title="Producers with longest and shortestt interval between win">
        <TableTitle>Maximum</TableTitle>
        <Table columnWidth={25}>
          <tr>
            <th>Producer</th>
            <th>Interval</th>
            <th>Previous Year</th>
            <th>Following Year</th>
          </tr>
          {awards && (
            <tr>
              <td>{awards.max[0].producer}</td>
              <td>{awards.max[0].interval}</td>
              <td>{awards.max[0].previousWin}</td>
              <td>{awards.max[0].followingWin}</td>
            </tr>
          )}
        </Table>

        <TableTitle style={{ marginTop: 20 }}>Minimum</TableTitle>
        <Table columnWidth={25}>
          <tr>
            <th>Producer</th>
            <th>Interval</th>
            <th>Previous Year</th>
            <th>Following Year</th>
          </tr>
          {awards && (
            <tr>
              <td>{awards.min[0].producer}</td>
              <td>{awards.min[0].interval}</td>
              <td>{awards.min[0].previousWin}</td>
              <td>{awards.min[0].followingWin}</td>
            </tr>
          )}
        </Table>
      </DivWithShadow>

      <DivWithShadow title="List movies winners by year">
        <Form onSubmit={getWinnerByYear}>
          <input
            type="number"
            placeholder="Search by year"
            value={winnerYear}
            onChange={(e) => setWinnerYear(e.target.value)}
          />
          <button type="submit">
            <img src={searchImg} alt="search" />
          </button>
        </Form>

        <Table columnWidth={33.33}>
          <tr>
            <th>Id</th>
            <th>Year</th>
            <th>title</th>
          </tr>
          {winners?.content.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.year}</td>
              <td>{movie.title}</td>
            </tr>
          ))}
        </Table>
      </DivWithShadow>
    </Container>
  )
}
