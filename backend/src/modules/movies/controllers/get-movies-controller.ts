import { Request, Response } from 'express'

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

export class GetMoviesController {
  async handle(request: Request, response: Response) {
    const { projection, page, size, winner, year } =
      request.query as unknown as GetMoviesQuery

    if (projection === 'studios-with-win-count') {
      const studiosWithWinnersUseCase = makeStudiosWithWinners()
      const result = await studiosWithWinnersUseCase.execute()

      return response.status(200).send({ studios: result })
    }

    if (projection === 'years-with-multiple-winners') {
      const listYearsWithMultipleWinnersUseCase =
        makeListYearsWithMultiplesWinners()

      const result = await listYearsWithMultipleWinnersUseCase.execute()

      return response.status(200).send({ years: result })
    }

    if (projection === 'max-min-win-interval-for-producers') {
      const awardsIntervalUseCase = makeAwardsInterval()
      const result = await awardsIntervalUseCase.execute()

      return response.status(201).send(result)
    }

    const getAllMoviesUseCase = makeGetAllMovies()
    const movies = await getAllMoviesUseCase.execute({
      size: Number(size) || undefined,
      page: Number(page) - 1 || undefined,
      winner: Boolean(winner),
      year: Number(year) || undefined,
    })

    return response.status(200).send(movies)
  }
}
