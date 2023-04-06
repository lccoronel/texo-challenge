import prisma from '@/lib/prisma/client'
import { Movies, Prisma } from '@prisma/client'
import { MoviesRepository } from './movies-repository'

export class PrismaMoviesRepository implements MoviesRepository {
  async findStudioWithWinners(): Promise<any> {
    const movies = await prisma.movies.groupBy({
      by: ['studios'],
      _count: {
        winner: true,
      },
      orderBy: {
        _count: {
          winner: 'desc',
        },
      },
      take: 3,
    })

    return movies
  }

  async findMultipleWinnersByYear(): Promise<any> {
    const movies = await prisma.movies.groupBy({
      by: ['year'],
      _count: {
        winner: true,
      },
      orderBy: {
        _count: {
          winner: 'desc',
        },
      },
      take: 3,
    })

    return movies
  }

  async findByTitle(title: string): Promise<Movies | null> {
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
