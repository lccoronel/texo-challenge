import { Route, Routes } from 'react-router-dom'

import { Dashboard } from '../pages/Dashboard'
import { CommomTemplate } from '../components/templates/CommomTemplate'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<CommomTemplate />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
