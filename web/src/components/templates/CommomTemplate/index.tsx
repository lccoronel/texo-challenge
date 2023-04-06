import React from 'react'
import { Outlet } from 'react-router-dom'
import { DefaultScreen } from '../../organisms'

export const CommomTemplate: React.FC = () => {
  return (
    <DefaultScreen>
      <Outlet />
    </DefaultScreen>
  )
}
