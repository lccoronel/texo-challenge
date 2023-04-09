import { PrismaMoviesRepository } from '@/modules/movies/repositories/prisma-movies-repository'
import { AwardsIntervalUseCase } from '@/modules/movies/use-cases/awards-interval-use-case'

export function makeAwardsInterval() {
  const moviesRepository = new PrismaMoviesRepository()
  const awardsIntervalUseCase = new AwardsIntervalUseCase(moviesRepository)

  return awardsIntervalUseCase
}
