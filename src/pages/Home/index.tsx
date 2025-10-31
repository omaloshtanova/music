// REVIEW: наведи порядок в импортах, общепринятая практика:,
// 1. Вендорные либы
// 2. Внутренние импорты
// 3. Ассеты
// Так же не исправила прошлое замечание про относительные ипорты ../../components/Search -> '@components/Search'
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

// REVIEW: По верстке в целом:
// 1. У тебя везде какие-то странные значения отступов и размеров, на макете другие. Например между поиском и картиекой RnB 23px у тебя 39
// 2. Не юзай в целом численные значения старайся по возможности все увязывать на относительные величины иначе ты не заадаптивишь это
// вместо gap-[39px] должно быть по хорошему gap-1 например для этого надо выставить переменную spacing (могу ошибаться в ее названии) у tailwind на значение
// подходящее твоему макету от которого все считать (например: gap-2 будет spacingX2)
// 3. Не правильный лэйаут страницы в целом она должна выглядеть как-то так
/*
<body>
  <div id="app">
    
    <aside>
      <logo />
      <navigation />
    </aside>
    
    <main>
      <header>
        <search />
      </header>

      <content />
    </main>
  </div>
</body>
*/
// Лучше сверстать основной лэйаут через grid и grid-template-areas. aside прибить всегда к левому краю. header к верху и только то что внутри content должно иметь скролл 
// 4. Так же у тебя верстка сейчас частично складывается к меньшему размеру но не тянется в большую сторону.
// У меня на 2к мониторе, весь контент узкой полосой по левому краю идет, процентов 70 экрана пустые

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
