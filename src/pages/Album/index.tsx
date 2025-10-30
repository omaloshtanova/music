import { MusicPlayer } from '../../components/MusicPlayer'
import { Search } from '../../components/Search'
import { SideMenu } from '../../components/SideMenu'
import './index.scss'
import like from '../../assets/red-like.svg'
import play from '../../assets/play-all.svg'
import add from '../../assets/albom-add.svg'
import { Track } from '../../components/Track'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { albumsStore } from '../../stores/AlbumsStore'
import type { AlbumModel } from '../../stores/models/AlbumModel'
import { observer } from 'mobx-react-lite'

export const Album = observer(() => {
  const params = useParams()
  const [ album, setAlbum ] = useState<AlbumModel | null>(null)

  useEffect(() => {
    setAlbum(albumsStore.getAlbumById(Number(params.id)))
    album?.loadTracks()
    return () => {}
  }, [album, params.id])
  
  console.log(album?.tracks);
  
  return (
    <>
      <div className="page flex flex-col gap-[39px]">
        <Search />
        <div className="flex flex-row gap-[24px]">
          <SideMenu />
          <div className="flex w-full flex-col gap-[49px]">
            <div className="flex flex-row items-center gap-[27px]">
              <img
                src={album?.img || '/default-image.png'}
                alt="cover"
              />
              <div className="flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[9px]">
                  <span className="h1-bold text-[var(--turquoise)]">
                    {album?.title}
                  </span>
                  <div className="flex flex-col gap-[10px]">
                    <span className="h3-reg text-[var(--light)]">
                      {album?.description}
                    </span>
                    <div className="h3-reg text-[var(--light)]">
                      <span>{album?.songs} songs ~ </span>
                      <span>{album?.hrs} hrs+</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[9px]">
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
            <div className="flex flex-col gap-[10px]">
              {album?.tracks.map(track => (
                <Track
                  key={track.id}
                  track={track}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <MusicPlayer />
    </>
  )
})
