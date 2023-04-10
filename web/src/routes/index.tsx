import { Route, Routes } from 'react-router-dom'

import { List } from '../pages/LIst'
import { Dashboard } from '../pages/Dashboard'
import { CommomTemplate } from '../components/templates/CommomTemplate'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<CommomTemplate />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list" element={<List />} />
      </Route>
    </Routes>
  )
}
