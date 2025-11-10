import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Album } from '../pages/Album'
import { Collections } from '@/pages/Collections'

export const Routing = () => {
  const router = (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/albums/:id"
          element={<Album />}
        />
        <Route
          path="/collections"
          element={<Collections />}
        />
      </Routes>
    </Router>
  )
  return router
}
