import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Album } from '../pages/Album'

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
      </Routes>
    </Router>
  )
  return router
}
