import img from '@assets/image/cover6.jpg'
import './index.scss'
import type { TrackModel } from '@/stores/models/TrackModel'

interface ITrackCollectionProps {
  track: TrackModel
}

export const TrackCollection = ({ track }: ITrackCollectionProps) => {
  return (
    <>
      <div className="conteiner-track">
        <div className="gradient">
          <img
            src={img}
            alt="cover"
            className="cover-track h-14"
          />
        </div>
        <div className="content-track">
          <span className="h1-reg">{track.title}</span>
          <span className="h5-reg">{track.singer}</span>
        </div>
      </div>
    </>
  )
}
