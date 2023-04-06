import React from 'react'
import { DivWithShadow, Table } from '../../components/molecules'
import searchImg from '../../assets/search.png'
import { Container, TableTitle, Form } from './styles'

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <DivWithShadow title="List years with multiple winners">
        <Table>
          <tr>
            <th>Year</th>
            <th>Win Count</th>
          </tr>
          <tr>
            <td>1997</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1997</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1997</td>
            <td>2</td>
          </tr>
        </Table>
      </DivWithShadow>

      <DivWithShadow title="Top 3 studios with winners">
        <Table>
          <tr>
            <th>Name</th>
            <th>Win Count</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Berglunds snabbköp</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>6</td>
          </tr>
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
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>6</td>
            <td>2002</td>
            <td>2002</td>
          </tr>
        </Table>

        <TableTitle style={{ marginTop: 20 }}>Minimum</TableTitle>
        <Table columnWidth={25}>
          <tr>
            <th>Producer</th>
            <th>Interval</th>
            <th>Previous Year</th>
            <th>Following Year</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>6</td>
            <td>2002</td>
            <td>2002</td>
          </tr>
        </Table>
      </DivWithShadow>

      <DivWithShadow title="List movies winners by year">
        <Form action="">
          <input type="number" placeholder="Search by year" />
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
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>6</td>
            <td>2002</td>
          </tr>
        </Table>
      </DivWithShadow>
    </Container>
  )
}
