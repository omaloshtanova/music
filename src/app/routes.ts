import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('./routes/Home.tsx'),
  route('/albums/:id', './routes/Album.tsx'),
  route('/collections', './routes/Collections.tsx'),
] satisfies RouteConfig