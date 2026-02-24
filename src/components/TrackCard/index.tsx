import { observer } from 'mobx-react-lite'
import type { TrackModel } from '@stores/models/TrackModel'
import { playerStore } from '@/stores/PlayerStore'
import { collectionStore } from '@/stores/CollectionStore'
import more from '@assets/icons/more-vertical.svg'
import likeNotActive from '@assets/icons/like.svg'
import likeActive from '@assets/icons/red-like.svg'
import './index.scss'

interface ITrackCardProps {
  track: TrackModel
}

export const TrackCard = observer(({ track }: ITrackCardProps) => {
  const setTrackHandle = () => {
    playerStore.setTrack(track)
  }

  const putLikeHandle = () => {
    // REVIEW: у тебя же сюда TrackModel передается в нем геттер и сделай
    // Надо стремиться максимально отделять данные от слоя
    // В идеале react должен быть тупо рисовалкой этих данных и ничего не решать
    // На крупных проектах такое очень влияет на читаемость и расширяемость кода
    if (!collectionStore.tracks.some(item => item.id === track.id)) {
      collectionStore.addTrack(track)
    } else {
      collectionStore.deleteTrack(track)
    }
  }

  return (
    <div className="track">
      <div className="flex flex-row items-center gap-1">
        <img
          src={track.img || '/default-image.png'}
          alt="cover"
          className="track__cover"
        />
        <img
          src={
            collectionStore.tracks.some(item => item.id === track.id)
              ? likeActive
              : likeNotActive
          }
          alt="like"
          onClick={putLikeHandle}
          className="track__like h-1 cursor-pointer"
        />
      </div>
      <div className="track__desc">
        <span
          className="h4-reg w-16 cursor-pointer text-[var(--white)]"
          onClick={setTrackHandle}
        >
          {track.title} ~ {track.singer}
        </span>
        <span className="h4-reg w-10 text-[var(--white)]">{track.type}</span>
        <span className="h4-reg text-[var(--white)]">{track.time}</span>
        <img src={more} alt="more"/>
      </div>
      <div className="track__desc-mobile">
        <div className="flex flex-col">
          <span
            className="h4-reg w-16 cursor-pointer text-[var(--white)]"
            onClick={setTrackHandle}
          >
            {track.title} ~ {track.singer}
          </span>
          <span className="h4-reg w-10 text-[var(--white)]">{track.type}</span>
        </div>
        <div className="flex flex-col">
          <img src={more} />
          <span className="h4-reg text-[var(--white)]">{track.time}</span>
        </div>
      </div>
    </div>
  )
})
