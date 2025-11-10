// 1. Вендорные либы
// 2. Внутренние импорты
// 3. Ассеты
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Search } from '@components/Search'
import { SideMenu } from '@components/SideMenu'
import { MusicPlayer } from '@components/MusicPlayer'
import { NewReleases } from '@/components/NewReleases'
import { AlbumsTopCharts } from '@/components/AlbumsTopCharts'
import { albumsStore } from '@stores/AlbumsStore'
import image from '@assets/image/img1.svg'
import './index.scss'

export const Home = observer(() => {
  useEffect(() => {
    albumsStore.loadAlbums()
  }, [])

  return (
    <>
      <div className="page">
        <SideMenu />
        <Search />
        <div className="content flex flex-col gap-2.5">
          <div className="flex flex-row gap-1.5">
            <img src={image} />
            <div className="flex w-full flex-col gap-1">
              <span className="h2-bold text-[var(--light)]">Top charts</span>
              <AlbumsTopCharts albums={albumsStore.albums} />
            </div>
          </div>
          <div className="flex flex-col gap-0.7">
            <span className="h2-bold text-[var(--light)] w-full">New releases</span>
            <NewReleases albums={albumsStore.albums} />
          </div>
          <div className="flex flex-col gap-0.7">
            <span className="h2-bold text-[var(--light)] w-full">New releases</span>
            <NewReleases albums={albumsStore.albums} />
          </div>
        </div>
      </div>
      <MusicPlayer />
    </>
  )
})
