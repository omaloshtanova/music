import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { TrackCard } from '@components/TrackCard'
import { albumsStore } from '@stores/AlbumsStore'
import type { AlbumModel } from '@stores/models/AlbumModel'
import like from '@assets/icons/red-like.svg'
import play from '@assets/icons/play-all.svg'
import add from '@assets/icons/albom-add.svg'
import './index.scss'

export const Album = observer(() => {
  const params = useParams()
  // REVIEW: у тебя стор есть зачем здесь useState
  const [album, setAlbum] = useState<AlbumModel | null>(null)

  useEffect(() => {
    setAlbum(albumsStore.getAlbumById(Number(params.id)))
    album?.loadTracks()
    // REVIEW: не пиши эти return если ничего в них не делаешь
    return () => {}
  }, [album, params.id])

  return (
    <>
      <div
        className="bg-page"
        style={{ backgroundImage: `url(${album?.img})` }}
      ></div>
      <div className="content album__conteiner">
        <div className="album__content">
          <img
            src={album?.img || '/'}
            alt="cover"
            className="cover-album h-18"
          />
          <div className="desc-album">
            <div className="flex flex-col gap-1">
              <span className="h1-bold text-[var(--turquoise)]">
                {album?.title}
              </span>
              <div className="flex flex-col gap-1">
                <span className="h3-reg text-[var(--light)]">
                  {album?.description}
                </span>
                <div className="h3-reg text-[var(--light)]">
                  <span>{album?.songs} songs ~ </span>
                  <span>{album?.hrs} hrs+</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <div className="btn">
                <img src={play} />
                <span className="h4-reg text-[var(--white)]">Play all</span>
              </div>
              <div className="btn">
                <img src={add} />
                <span className="h4-reg text-[var(--white)]">
                  Add to collection
                </span>
              </div>
              <div className="btn">
                <img src={like} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {album?.tracks.map(track => (
            <TrackCard
              key={track.id}
              track={track}
            />
          ))}
        </div>
      </div>
    </>
  )
})
