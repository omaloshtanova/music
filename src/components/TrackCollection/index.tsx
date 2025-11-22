import type { TrackModel } from '@/stores/models/TrackModel'
import img from '@assets/image/cover6.jpg'
import './index.scss'
import play from '@assets/icons/play-yallow.svg'

interface ITrackCollectionProps {
  track: TrackModel
}

export const TrackCollection = ({ track }: ITrackCollectionProps) => {
  return (
    <div className="conteiner-track">
      <div className="gradient">
        <img
          src={img}
          alt="cover"
          className="conteiner-track__cover-track"
        />
      </div>
      <div className="content-track">
        <div className='flex flex-col'>
          <span className="h1-reg">{track.title}</span>
          <span className="h5-reg">{track.singer}</span>
        </div>
        <span>{track.countLikes} likes</span>
      </div>
      <div className='play-transparent'>
        <img
          src={play}
          alt="play"
          className="h-1"
        />
      </div>
    </div>
  )
}
