import circle from '../../assets/circle.svg'
import like from '../../assets/like.svg'
import type { Albom } from '../../types/Albom'
import './index.scss'

interface Props {
  albom: Albom; 
}

export const AlbomTopCharts = ({ albom }: Props) => {
  return (
    <>
      <div className="conteiner-track">
        <div className="flex flex-row gap-[14px]">
          <img
            src={albom.img}
            alt="img"
          />
          <div className="flex flex-col gap-[8px]">
            <span className="h2-reg text-[var(--white)]">{albom.title}</span>
            <span className="h4-reg text-[var(--grey)]">{albom.singer}</span>
            <span className="h4-reg text-[var(--white)]">{albom.time}</span>
          </div>
        </div>
        <div className="conteiner-like">
          <img src={circle} />
          <img
            className="like"
            src={like}
          />
        </div>
      </div>
    </>
  )
}
