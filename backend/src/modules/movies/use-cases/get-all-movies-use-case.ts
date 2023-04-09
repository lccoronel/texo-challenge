import { MoviesRepository } from '@/modules/movies/repositories/movies-repository'

interface GetAllMoviesParams {
  size?: number
  page?: number
  winner?: boolean
  year?: number
}

export class GetAllMoviesUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute({ size = 10, page = 0, year, winner }: GetAllMoviesParams) {
    const getAllResponse = await this.moviesRepository.getAll({
      size,
      page,
      winner,
      year,
    })

    const response = {
      content: getAllResponse?.movies,
      pageable: {
        sort: {
          sorted: false,
          unsorted: true,
        },
        pageSize: size,
        pageNumber: page,
        offset: page,
        paged: true,
        unpaged: false,
      },
      totalElements: getAllResponse?.total,
      last: getAllResponse?.totalPages === page,
      totalPages: getAllResponse?.totalPages,
      first: true,
      sort: {
        sorted: false,
        unsorted: true,
      },
      number: 0,
      numberOfElements: size,
      size,
    }

    return response
  }
}
