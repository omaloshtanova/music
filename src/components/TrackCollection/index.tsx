import type { TrackModel } from '@/stores/models/TrackModel'
import img from '@assets/image/cover6.jpg'
import './index.scss'
import play from '@assets/icons/play-yallow.svg'

interface ITrackCollectionProps {
  track: TrackModel
}

export const TrackCollection = ({ track }: ITrackCollectionProps) => {
  return (
    <div className="track-collection">
      <div className="track-collection__gradient">
        <img
          src={img}
          alt="cover"
          className="track-collection__gradient__cover"
        />
      </div>
      <div className="track-collection__info">
        <div className="flex flex-col">
          <span className="h1-reg">{track.title}</span>
          <span className="h5-reg">{track.singer}</span>
        </div>
        <span>{track.countLikes} likes</span>
      </div>
      <div className="track-collection__play">
        <img
          src={play}
          alt="play"
          className="h-1"
        />
      </div>
    </div>
  )
}
