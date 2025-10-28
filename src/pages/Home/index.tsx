import { Search } from '../../components/Search'
import { SideMenu } from '../../components/SideMenu'
import image from '../../assets/img1.svg'
import { AlbomTopCharts } from '../../components/AlbomTopCharts'
import './index.scss'

/* REVIEW: На больших проектах вложеность может быть очень большой и с такими импортами много мучений
Лучше настроить импорт алиасы. Для этого надо в tsconfig.json добавить такого плана конфиг:
{
  "compilerOptions": {
    "baseUrl": ".", // or "src" if your source code is in a 'src' folder
    "paths": {
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"],
    }
  }
}
Это чтоб ide понимала пути.
А так же в vite.config.ts:
resolve: {
  alias: {
    '@components': path.resolve(__dirname, './src/components'),
    '@utils': path.resolve(__dirname, './src/utils'),
  },
},
Это чтобы vite правильно резолвил при билде.
В итоге в коде везде будет импорт такого плана:
import { Albom } from @components/Albom'
Плюч если мы папку components переместим то модно будет просто поправить до нее путь в алиасах
Подробней погугли по запросу tsconfig.json path alias и vite path alias
*/

import { Albom } from '../../components/Albom'
import { MusicPlayer } from '../../components/MusicPlayer'
import { useEffect } from 'react'
import { albomsStore } from '../../stores/Alboms'

export const Home = () => {
  useEffect(() => {
    albomsStore.fetchAlboms()
    albomsStore.fetchNewReleases()

    console.log(albomsStore.alboms)

    // REVIEW: Если при unmount ничего не происходит то return у useEffect писать не надо
    return () => {}
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
                  {/* REVIEW: можно сократить до:
                    albomsStore.alboms.map(albom => 
                      <AlbomTopCharts
                        key={albom.id}
                        albom={albom}
                      />
                  })
                    Это конечно вопрос код стайла конкретной команды, но чаще можно встретить
                    мой вариант. Вообще согласно доке mobx списки рекомендуется рендерить в отдельных компонентах. 
                    Так же тут как раз этот компонент списка можно переиспользовать ниже 
                  */}
                  {albomsStore.alboms.map(albom => {
                    return (
                      <AlbomTopCharts
                        key={albom.id}
                        albom={albom}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <span className="h2-bold text-[var(--light)]">New releases</span>
              <div className="flex flex-row gap-[30px]">
                {/* REVIEW: тоже что и выше */ }
                {albomsStore.newReleases.map(newReleases => {
                  return (
                    <Albom
                      key={newReleases.id}
                      albom={newReleases}
                    />
                  )
                })}
              </div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <span className="h2-bold text-[var(--light)]">New releases</span>
              <div className="flex flex-row gap-[30px]">
                {/* REVIEW: тоже что и выше */ }
                {albomsStore.newReleases.map(newReleases => {
                  return (
                    <Albom
                      key={newReleases.id}
                      albom={newReleases}
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
}
