import { FastifyInstance } from 'fastify'
import { GetMovies } from './controllers/movies/get-movies'

const getMovies = new GetMovies()

export async function appRoutes(app: FastifyInstance) {
  app.get('/movies', getMovies.execute)
}
