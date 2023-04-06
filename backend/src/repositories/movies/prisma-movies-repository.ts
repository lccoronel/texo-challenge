import prisma from '@/lib/prisma/client'
import { Movies, Prisma } from '@prisma/client'
import { MoviesRepository } from './movies-repository'

export class PrismaMoviesRepository implements MoviesRepository {
  async findbyTitle(title: string): Promise<Movies | null> {
    const movie = await prisma.movies.findUnique({
      where: { title },
    })

    return movie
  }

  async create(data: Prisma.MoviesCreateInput): Promise<Movies> {
    const movie = await prisma.movies.create({
      data,
    })

    return movie
  }
}
