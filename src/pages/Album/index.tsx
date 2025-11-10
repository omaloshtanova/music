import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'
import { MusicPlayer } from '@components/MusicPlayer'
import { Search } from '@components/Search'
import { SideMenu } from '@components/SideMenu'
import { TrackCard } from '@components/TrackCard'
import { albumsStore } from '@stores/AlbumsStore'
import type { AlbumModel } from '@stores/models/AlbumModel'
import like from '@assets/icons/red-like.svg'
import play from '@assets/icons/play-all.svg'
import add from '@assets/icons/albom-add.svg'
import './index.scss'

export const Album = observer(() => {
  const params = useParams()
  const [album, setAlbum] = useState<AlbumModel | null>(null)

  useEffect(() => {
    setAlbum(albumsStore.getAlbumById(Number(params.id)))
    album?.loadTracks()
    return () => {}
  }, [album, params.id])

  return (
    <>
      <div className='retative w-full h-full'>
        <img
          src={album?.img || '/'}
          alt="cover"
          className='w-full'
        />
        <div className="page page-fon">
          <Search />
          <SideMenu />
          <div className="content flex w-full flex-col gap-3">
            <div className="flex flex-row items-center gap-2">
              <img
                src={album?.img || '/'}
                alt="cover"
              />
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-0.5">
                  <span className="h1-bold text-[var(--turquoise)]">
                    {album?.title}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="h3-reg text-[var(--light)]">
                      {album?.description}
                    </span>
                    <div className="h3-reg text-[var(--light)]">
                      <span>{album?.songs} songs ~ </span>
                      <span>{album?.hrs} hrs+</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-0.5">
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
            <div className="flex flex-col gap-0.5">
              {album?.tracks.map(track => (
                <TrackCard
                  key={track.id}
                  track={track}
                />
              ))}
            </div>
          </div>
        </div>
        <MusicPlayer />
      </div>
    </>
  )
})
