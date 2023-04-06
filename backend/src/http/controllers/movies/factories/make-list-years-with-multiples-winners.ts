import { PrismaMoviesRepository } from '@/repositories/movies/prisma-movies-repository'
import { ListYearsWithMultipleWinnersUseCase } from '@/use-cases/list-years-with-multiple-winners-use-case'

export function makeListYearsWithMultiplesWinners() {
  const moviesRepository = new PrismaMoviesRepository()
  const listYearsWithMultipleWinnersUseCase =
    new ListYearsWithMultipleWinnersUseCase(moviesRepository)

  return listYearsWithMultipleWinnersUseCase
}
