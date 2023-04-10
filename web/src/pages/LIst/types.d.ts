/* eslint-disable no-unused-vars */
declare namespace List {
  interface Winners {
    id: string
    year: number
    title: string
    studios: string
    producers: string
    winner: boolean
    created_at: string
  }

  interface Sorted {
    sorted: boolean
    unsorted: boolean
  }

  interface WinnersList {
    content: Winners[]
    pageable: {
      sort: Sorted
      pageSize: number
      pageNumber: number
      offset: number
      paged: boolean
      unpaged: boolean
    }
    totalElements: number
    last: boolean
    totalPages: number
    first: boolean
    sort: Sorted
    number: number
    numberOfElements: number
    size: number
  }
}
