import { PrismaMoviesRepository } from '@/repositories/movies/prisma-movies-repository'
import { StudiosWithWinnersUseCase } from '@/use-cases/studio-with-winners-use-case'

export function makeStudiosWithWinners() {
  const moviesRepository = new PrismaMoviesRepository()
  const studiosWithWinnersUseCase = new StudiosWithWinnersUseCase(
    moviesRepository,
  )

  return studiosWithWinnersUseCase
}
