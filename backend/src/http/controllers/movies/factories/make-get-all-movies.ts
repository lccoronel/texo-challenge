import { PrismaMoviesRepository } from '@/repositories/movies/prisma-movies-repository'
import { GetAllMoviesUseCase } from '@/use-cases/get-all-movies-use-case'

export function makeGetAllMovies() {
  const moviesRepository = new PrismaMoviesRepository()
  const getAllMoviesUseCase = new GetAllMoviesUseCase(moviesRepository)

  return getAllMoviesUseCase
}
