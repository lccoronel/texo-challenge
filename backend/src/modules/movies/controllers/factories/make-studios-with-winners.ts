import { PrismaMoviesRepository } from '@/modules/movies/repositories/prisma-movies-repository'
import { StudiosWithWinnersUseCase } from '@/modules/movies/use-cases/studio-with-winners-use-case'

export function makeStudiosWithWinners() {
  const moviesRepository = new PrismaMoviesRepository()
  const studiosWithWinnersUseCase = new StudiosWithWinnersUseCase(
    moviesRepository,
  )

  return studiosWithWinnersUseCase
}
