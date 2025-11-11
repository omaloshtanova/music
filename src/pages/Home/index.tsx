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

  /* REVIEW: Зачем ты везде вставляешь фрагменты <></>? 
  Фрагмент нужен только если тебе надо например сделать два div рядом, но в дереве у них не должно быть обертки, например
  
  Вот так реакт будет ругаться без еще одного div вокруг, но нам он не нужен
  <div id="a"></div>
  <div id="a"></div>
  тогда пишут фрагмент, реакт радуется и мы радуемся без лишнего мусора в dom дереве
  <>
    <div id="a"></div>
    <div id="a"></div>
  </>

  Так же у тебя ошибка в композиции на базовом уровне. Например такие компоненты как <SideMenu /> <Search /> <MusicPlayer />
  Присутствуют на всех страницах приложения. Зачем они нка каждой странице и вообще существуют внутри роутера?
  Их надо вынести за роутинг, сейчас они у тебя просто перерисовываются постоянно. Не првоерял, но в теории если твой плеер будет играть трек
  то если перейти на другую страницу, музыка стопнется из за этого, хотя учитывая что там нативный audio то юзер этого не заметит    
  */

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
