import React, { useMemo, useState } from 'react'

import arrowLeft from '../../../assets/arrow-left.png'
import arrowRight from '../../../assets/arrow-right.png'
import arrowRightLast from '../../../assets/arrow-right-last.png'
import arrowLeftFirst from '../../../assets/arrow-left-first.png'
import { Container, PageButton } from './styles'

interface PaginationProps {
  totalPages: number
  currentPage?: number
  onPageChange(page: number): void
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage = 1,
  onPageChange,
}) => {
  const [selectedPage, setSelectedPage] = useState(currentPage)

  const pagesList = Object.keys(new Array(totalPages).fill(null)).map(Number)

  const firstPage = useMemo(() => {
    if (selectedPage >= pagesList.length - 9) {
      return pagesList.length - 10
    }

    return selectedPage - 1
  }, [selectedPage, pagesList])

  const lastPage = firstPage + 10

  function handleMovePage(action: 'prev' | 'next') {
    if (action === 'prev' && selectedPage >= 2) {
      setSelectedPage((oldPage) => {
        const newPage = oldPage - 1
        onPageChange(newPage)
        return newPage
      })
    }

    if (action === 'next' && selectedPage < pagesList.length) {
      setSelectedPage((oldPage) => {
        const newPage = oldPage + 1
        onPageChange(newPage)
        return newPage
      })
    }
  }

  function handleSetLastOrFisrtPage(action: 'fisrt' | 'last') {
    if (action === 'fisrt') {
      onPageChange(1)
      setSelectedPage(1)
    }

    if (action === 'last') {
      onPageChange(pagesList.length)
      setSelectedPage(pagesList.length)
    }
  }

  return (
    <Container>
      <div>
        <button
          className="move-button"
          onClick={() => handleSetLastOrFisrtPage('fisrt')}
        >
          <img src={arrowLeftFirst} alt="Set fisrt page" />
        </button>
        <button className="move-button" onClick={() => handleMovePage('prev')}>
          <img src={arrowLeft} alt="Set previous page" />
        </button>

        {pagesList.slice(firstPage, lastPage).map((page) => (
          <PageButton
            key={page}
            isCurrentPage={selectedPage === page + 1}
            onClick={() => setSelectedPage(page + 1)}
          >
            {page + 1}
          </PageButton>
        ))}

        <button className="move-button" onClick={() => handleMovePage('next')}>
          <img src={arrowRight} alt="Set next page" />
        </button>
        <button
          className="move-button"
          onClick={() => handleSetLastOrFisrtPage('last')}
        >
          <img src={arrowRightLast} alt="Set last page" />
        </button>
      </div>
    </Container>
  )
}
