import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Album } from '../pages/Album'
import { Collections } from '@/pages/Collections'

// REVIEW: Посмотри документацию к react-router-dom https://reactrouter.com/start/framework/routing
// Не описывают так роуты уже давно в этой либе. Декларативное описание имеет меньше функциональности и гибкости, 
// и оставлено в либе как таковое из за обратной совместимости
export const Routing = () => {
  // REVIEW: А зачем заводить переменную чтоб ее тут же вернуть просто. Ты же просто выделила лишнюю памят под это
  // просто возвращай сразу то что надо в таких случаях
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
