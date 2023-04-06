import { Movies, Prisma } from '@prisma/client'

export interface MultipleWinnersByYearProps {
  _count: {
    winner: number
  }
  year: number
}

export interface MoviesRepository {
  create(data: Prisma.MoviesCreateInput): Promise<Movies>
  findByTitle(title: string): Promise<Movies | null>
  findMultipleWinnersByYear(): Promise<MultipleWinnersByYearProps | null>
  findStudioWithWinners(): Promise<any>
}
