import React from 'react'
import { Header } from '../../molecules/Header'
import { Outlet } from 'react-router-dom'

export const CommomTemplate: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
