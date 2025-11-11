import { Routing } from './Routing'

export function App() {
  // REVIEW: Зачем здесь фрагмент потом еще обертка в виде div? 
  // Какой смысл вообще существования этого компонента если <Routing /> можно сразу в main.tsx воткнуть?
  return (
    <>
      <div>
        <Routing />
      </div>
    </>
  )
}
