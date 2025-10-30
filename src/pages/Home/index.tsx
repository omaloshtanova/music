import { Search } from '../../components/Search'
import { SideMenu } from '../../components/SideMenu'
import image from '../../assets/img1.svg'
import { observer } from 'mobx-react-lite'
import './index.scss'

import { MusicPlayer } from '@/components/MusicPlayer'

import { useEffect } from 'react'
import { albumsStore } from '../../stores/AlbumsStore'
import { AlbumTopCharts } from '../../components/AlbumTopCharts'
import { Album } from '../../components/Album'

export const Home = observer(() => {
  useEffect(() => {
    albumsStore.loadAlbums()
  }, [])

  return (
    <>
      <div className="page flex flex-col gap-[39px]">
        <Search />
        <div className="flex flex-row gap-[24px]">
          <SideMenu />
          <div className="flex flex-col gap-[43px]">
            <div className="flex flex-row gap-[24px]">
              <img src={image} />
              <div className="flex flex-col gap-[14px]">
                <span className="h2-bold text-[var(--light)]">Top charts</span>
                <div className="flex flex-col gap-[12px]">
                  {/* Вообще согласно доке mobx списки рекомендуется рендерить в отдельных компонентах. 
                    Так же тут как раз этот компонент списка можно переиспользовать ниже 
                  */}
                  {albumsStore.albums.map(album => (
                    <AlbumTopCharts
                      key={album.id}
                      album={album}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <span className="h2-bold text-[var(--light)]">New releases</span>
              <div className="flex flex-row gap-[30px]">
                {albumsStore.albums.map(newReleases => {
                  return (
                    <Album
                      key={newReleases.id}
                      album={newReleases}
                    />
                  )
                })}
              </div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <span className="h2-bold text-[var(--light)]">New releases</span>
              <div className="flex flex-row gap-[30px]">
                {/* REVIEW: тоже что и выше */}
                {albumsStore.albums.map(newReleases => {
                  return (
                    <Album
                      key={newReleases.id}
                      album={newReleases}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MusicPlayer />
    </>
  )
})
