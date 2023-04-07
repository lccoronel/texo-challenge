import { PrismaMoviesRepository } from '@/repositories/movies/prisma-movies-repository'
import { AwardsIntervalUseCase } from '@/use-cases/awards-interval-use-case'

export function makeAwardsInterval() {
  const moviesRepository = new PrismaMoviesRepository()
  const awardsIntervalUseCase = new AwardsIntervalUseCase(moviesRepository)

  return awardsIntervalUseCase
}
