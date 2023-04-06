import { Movies, Prisma } from '@prisma/client'

export interface MoviesRepository {
  create(data: Prisma.MoviesCreateInput): Promise<Movies>
  findbyTitle(title: string): Promise<Movies | null>
}
