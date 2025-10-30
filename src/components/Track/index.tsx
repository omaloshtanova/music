import more from '../../assets/more-vertical.svg'
import like from '../../assets/like.svg'
import './index.scss'
import type { TrackModel } from '../../stores/models/TrackModel'

interface Props {
  track: TrackModel
}

export const Track = ({ track }: Props) => {
  console.log('track', track);
  

  return (
    <>
      <div className="track-row flex flex-row items-center justify-between">
        <div className="flex flex-row gap-[77px]">
          <div className="flex flex-row gap-[18px]">
            <img src={track.img || '/default-image.png'} alt="cover" />
            <img
              src={like}
              alt="like"
            />
          </div>
        </div>
        <span className="h4-reg text-[var(--white)]">
          {track.title} ~ {track.singer}
        </span>
        <span className="h4-reg text-[var(--white)]">{track.type}</span>
        <span className="h4-reg text-[var(--white)]">{track.time}</span>
        <img src={more} />
      </div>
    </>
  )
}
