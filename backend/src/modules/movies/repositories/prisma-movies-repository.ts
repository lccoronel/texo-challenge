import { Movies, Prisma } from '@prisma/client'

import database from '@/shared/infra/providers/database'
import {
  GetAllParams,
  GetAllResponseProps,
  MoviesRepository,
} from './movies-repository'

export class PrismaMoviesRepository implements MoviesRepository {
  async getAll({
    size,
    page,
    winner,
    year,
  }: GetAllParams): Promise<GetAllResponseProps | null> {
    const [movies, total] = await database.$transaction([
      database.movies.findMany({
        take: size,
        skip: page,
        where: { year, winner },
      }),
      database.movies.count(),
    ])

    const totalPages = Math.ceil(total / size)

    return { total, totalPages, movies }
  }

  async getProducersWinners(): Promise<any> {
    return database.movies.findMany({
      where: {
        winner: true,
      },
      select: {
        year: true,
        producers: true,
      },
    })
  }

  async findStudioWithWinners(): Promise<any> {
    const movies = await database.movies.groupBy({
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
    const movies = await database.movies.groupBy({
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
    const movie = await database.movies.findUnique({
      where: { title },
    })

    return movie
  }

  async create(data: Prisma.MoviesCreateInput): Promise<Movies> {
    const movie = await database.movies.create({
      data,
    })

    return movie
  }
}
