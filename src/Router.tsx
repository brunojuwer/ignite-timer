import { Routes, Route } from 'react-router-dom'
import { DefautlLayout } from './layouts/DefaultLayout'
import { History } from './pages/History/History'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefautlLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
