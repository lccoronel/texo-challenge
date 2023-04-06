import { FastifyInstance } from 'fastify'
import { listYearsWithMultipleWinners } from './controllers/movies/list-years-with-multiple-winners'

export async function appRoutes(app: FastifyInstance) {
  app.get(
    '/movies/list-years-with-multiple-winners',
    listYearsWithMultipleWinners,
  )
}
