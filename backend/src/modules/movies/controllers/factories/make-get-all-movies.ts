import { PrismaMoviesRepository } from '@/modules/movies/repositories/prisma-movies-repository'
import { GetAllMoviesUseCase } from '@/modules/movies/use-cases/get-all-movies-use-case'

export function makeGetAllMovies() {
  const moviesRepository = new PrismaMoviesRepository()
  const getAllMoviesUseCase = new GetAllMoviesUseCase(moviesRepository)

  return getAllMoviesUseCase
}
