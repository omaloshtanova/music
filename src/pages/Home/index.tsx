import { Search } from '../../components/Search'
import { SideMenu } from '../../components/SideMenu'
import image from '../../assets/img1.svg'
import { AlbomTopCharts } from '../../components/AlbomTopCharts'
import './index.scss'

import { Albom } from '../../components/Albom'
import { MusicPlayer } from '../../components/MusicPlayer'
import { useEffect } from 'react'
import { albomsStore } from '../../stores/Alboms'

export const Home = () => {
  useEffect(() => {
    albomsStore.fetchAlboms()
    albomsStore.fetchNewReleases()
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
