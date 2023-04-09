import { PrismaMoviesRepository } from '@/modules/movies/repositories/prisma-movies-repository'
import { ListYearsWithMultipleWinnersUseCase } from '@/modules/movies/use-cases/list-years-with-multiple-winners-use-case'

export function makeListYearsWithMultiplesWinners() {
  const moviesRepository = new PrismaMoviesRepository()
  const listYearsWithMultipleWinnersUseCase =
    new ListYearsWithMultipleWinnersUseCase(moviesRepository)

  return listYearsWithMultipleWinnersUseCase
}
