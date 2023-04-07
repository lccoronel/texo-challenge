import { FastifyReply, FastifyRequest } from 'fastify'
import { makeStudiosWithWinners } from './factories/make-studios-with-winners'
import { makeListYearsWithMultiplesWinners } from './factories/make-list-years-with-multiples-winners'
import { makeAwardsInterval } from './factories/make-awards-interval'

interface GetMoviesQuery {
  projection:
    | 'studios-with-win-count'
    | 'max-min-win-interval-for-producers'
    | 'years-with-multiple-winners'
}

export class GetMovies {
  async execute(request: FastifyRequest, reply: FastifyReply) {
    const { projection } = request.query as GetMoviesQuery

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
  }
}
