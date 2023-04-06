import { FastifyInstance } from 'fastify'
import { listYearsWithMultipleWinners } from './controllers/movies/list-years-with-multiple-winners'
import { studiosWithWinners } from './controllers/movies/sudios-with-winners'

const prefix = '/movies'

export async function appRoutes(app: FastifyInstance) {
  app.get(
    `${prefix}/list-years-with-multiple-winners`,
    listYearsWithMultipleWinners,
  )
  app.get(`${prefix}/studios-with-winners`, studiosWithWinners)
}
