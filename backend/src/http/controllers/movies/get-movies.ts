import { FastifyReply, FastifyRequest } from 'fastify'
import { makeStudiosWithWinners } from './factories/make-studios-with-winners'
import { makeListYearsWithMultiplesWinners } from './factories/make-list-years-with-multiples-winners'
import { makeAwardsInterval } from './factories/make-awards-interval'
import { makeGetAllMovies } from './factories/make-get-all-movies'

interface GetMoviesQuery {
  projection:
    | 'studios-with-win-count'
    | 'max-min-win-interval-for-producers'
    | 'years-with-multiple-winners'
  page: string
  size: string
  winner: string
  year: string
}

export class GetMovies {
  async execute(request: FastifyRequest, reply: FastifyReply) {
    const { projection, page, size, winner, year } =
      request.query as GetMoviesQuery

    if (projection === 'studios-with-win-count') {
      const studiosWithWinnersUseCase = makeStudiosWithWinners()
      const response = await studiosWithWinnersUseCase.execute()

      return reply.status(200).send({ studios: response })
    }

    if (projection === 'years-with-multiple-winners') {
      const listYearsWithMultipleWinnersUseCase =
        makeListYearsWithMultiplesWinners()

      const response = await listYearsWithMultipleWinnersUseCase.execute()

      return reply.status(200).send({ years: response })
    }

    if (projection === 'max-min-win-interval-for-producers') {
      const awardsIntervalUseCase = makeAwardsInterval()
      const response = await awardsIntervalUseCase.execute()

      return reply.status(201).send(response)
    }

    const getAllMoviesUseCase = makeGetAllMovies()
    const response = await getAllMoviesUseCase.execute({
      size: Number(size) || undefined,
      page: Number(page) - 1 || undefined,
      winner: Boolean(winner),
      year: Number(year) || undefined,
    })

    return reply.status(200).send(response)
  }
}
