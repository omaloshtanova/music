import { useNavigate } from 'react-router-dom'
import circle from '../../assets/circle.svg'
import like from '../../assets/yellow-like.svg'
import './index.scss'
import type { AlbumModel } from '../../stores/models/AlbumModel'

interface Props {
  album: AlbumModel
}

export const AlbumTopCharts = ({ album }: Props) => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className="conteiner-album"
        onClick={() => {
          navigate(`albums/${album.id}`)
        }}
      >
        <div className="flex flex-row gap-[14px]">
          <img
            src={album.img!}
            alt="cover"
            className="h-[63px]"
          />
          <div className="flex flex-col gap-[8px]">
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
