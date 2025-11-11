// import { useState } from 'react'
import type { TrackModel } from '@stores/models/TrackModel'
import { playerStore } from '@/stores/PlayerStore'
import { collectionStore } from '@/stores/CollectionStore'
import more from '@assets/icons/more-vertical.svg'
import likeNotActive from '@assets/icons/like.svg'
import likeActive from '@assets/icons/red-like.svg'
import './index.scss'
import { observer } from 'mobx-react-lite'

interface ITrackCardProps {
  track: TrackModel
}

export const TrackCard = observer(({ track }: ITrackCardProps) => {
  console.log(track);
  console.log(track.title, track.like)

  const setTarckHandle = () => {
    playerStore.setTrack(track)
  }

  const putLikeHandel = () => {
    // REVIEW: свойство like у модели по сути лишнее раз ты складываешь треки в коллекцию
    // Сердечко покрасить можно на основе наличия трека в коллекции тогда и перетираться оно не будет из loadTracks()
    track.setLike(!track.like)
    console.log( 'задали', track.title, track.like)
    
    if (track.like) {
      collectionStore.addTrack(track)
    } else {
      collectionStore.deleteTrack(track)
    }
  }

  return (
    <>
      <div className="track-row flex flex-row items-center justify-between">
        <div className="flex flex-row gap-5">
          <div className="flex flex-row items-center gap-1">
            <img
              src={track.img || '/default-image.png'}
              alt="cover"
            />
            <img
              src={track.like ? likeActive : likeNotActive}
              alt="like"
              onClick={putLikeHandel}
              className="cursor-pointer h-1"
            />
          </div>
        </div>
        <span
          className="h4-reg w-16 cursor-pointer text-[var(--white)]"
          onClick={setTarckHandle}
        >
          {track.title} ~ {track.singer}
        </span>
        <span className="h4-reg w-10 text-[var(--white)]">{track.type}</span>
        <span className="h4-reg text-[var(--white)]">{track.time}</span>
        <img src={more} />
      </div>
    </>
  )
})
