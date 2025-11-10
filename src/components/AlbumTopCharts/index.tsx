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
    <>
      <div
        className="conteiner-album"
        onClick={() => {
          navigate(`albums/${album.id}`)
        }}
      >
        <div className="flex flex-row gap-1">
          <img
            src={album.img!}
            alt="cover"
            className="h-4"
          />
          <div className="flex flex-col gap-0.5">
            <span className="h2-reg text-[var(--white)]">{album.title}</span>
            <span className="h4-reg text-[var(--light-grey)]">{album.dj}</span>
            <span className="h4-reg text-[var(--white)]">{album.time}</span>
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
