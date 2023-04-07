import { Movies, Prisma } from '@prisma/client'

export interface ProducersWinnersProps {
  producers: string
  year: number
}

export interface MoviesRepository {
  create(data: Prisma.MoviesCreateInput): Promise<Movies>
  findByTitle(title: string): Promise<Movies | null>
  findMultipleWinnersByYear(): Promise<any>
  findStudioWithWinners(): Promise<any>
  getProducersWinners(): Promise<ProducersWinnersProps[] | null>
}
