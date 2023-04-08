import { Movies, Prisma } from '@prisma/client'

export interface ProducersWinnersProps {
  producers: string
  year: number
}

export interface GetAllParams {
  size: number
  page: number
  winner?: boolean
  year?: number
}

export interface GetAllResponseProps {
  total: number
  totalPages: number
  movies: Movies[]
}

export interface MoviesRepository {
  create(data: Prisma.MoviesCreateInput): Promise<Movies>
  findByTitle(title: string): Promise<Movies | null>
  findMultipleWinnersByYear(): Promise<any>
  findStudioWithWinners(): Promise<any>
  getProducersWinners(): Promise<ProducersWinnersProps[] | null>
  getAll(params: GetAllParams): Promise<GetAllResponseProps | null>
}
