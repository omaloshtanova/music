import { useNavigate } from 'react-router-dom'
import type { AlbumModel } from '@stores/models/AlbumModel'
import circle from '@assets/icons/circle.svg'
import like from '@assets/icons/yellow-like.svg'
import './index.scss'

interface IAlbumTopChartsProps {
  album: AlbumModel
}

export const AlbumTopCharts = ({ album }: IAlbumTopChartsProps) => {
  const navigate = useNavigate()
  return (
    <div
      className="top-charts"
      onClick={() => {
        navigate(`albums/${album.id}`)
      }}
    >
      <img
        src={album.img!}
        alt="cover"
        className="top-charts__cover"
      />
      <div className="top-charts__desc">
        <span className="h2-reg text-[var(--white)]">{album.title}</span>
        <span className="h4-reg text-[var(--light-grey)]">{album.dj}</span>
      </div>
      <span className="top-charts__time h4-reg text-[var(--white)]">{album.time}</span>
      <div className="top-charts__like">
        <img src={circle} />
        <img
          className="like"
          src={like}
        />
      </div>
    </div>
  )
}
