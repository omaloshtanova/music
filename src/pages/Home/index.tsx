// 1. Вендорные либы
// 2. Внутренние импорты
// 3. Ассеты
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { NewReleases } from '@/components/NewReleases'
import { AlbumsTopCharts } from '@/components/AlbumsTopCharts'
import { albumsStore } from '@stores/AlbumsStore'
import image from '@assets/image/img1.svg'
import imageMobile from '@assets/image/img2.svg'
import './index.scss'

export const Home = observer(() => {
  useEffect(() => {
    albumsStore.loadAlbums()
  }, [])
  return (
    <div className="home content">
      <img
        className="home__image"
        src={image}
      />
      <img
        className="home__image-mobile"
        src={imageMobile}
      />
      <div className="home__top-charts flex w-full flex-col gap-1">
        <span className="h2-bold text-[var(--light)]">Top charts</span>
        <AlbumsTopCharts albums={albumsStore.albums} />
      </div>
      <div className="home__new-releases flex flex-col gap-1">
        <span className="h2-bold w-full text-[var(--light)]">New releases</span>
        <NewReleases albums={albumsStore.albums} />
      </div>
      <div className="popular flex flex-col gap-1">
        <span className="h2-bold w-full text-[var(--light)]">
          Popular in your area
        </span>
        <NewReleases albums={albumsStore.albums} />
      </div>
    </div>
  )
})
