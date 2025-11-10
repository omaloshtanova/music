import { useState } from 'react'
import { MusicPlayer } from '@/components/MusicPlayer'
import { Search } from '@/components/Search'
import { SideMenu } from '@/components/SideMenu'
import './index.scss'
import { TracksCollection } from '@/components/TracksCollection'

export const Collections = () => {
  const [isActive, setIsActive] = useState(true)
  const [colorCollection, setColorCollection] = useState('yellow')
  const [colorLikes, setColorLikes] = useState('silver')

  const switchHandle = () => {
    if (isActive) {
      setColorCollection('yellow')
      setColorLikes('silver')
      setIsActive(!isActive)
    } else {
      setColorCollection('silver')
      setColorLikes('yellow')
      setIsActive(!isActive)
    }
  }

  return (
    <>
      <div className="page">
        <Search />
        <SideMenu />
        <div className="content flex w-full flex-col gap-[1.5rem]">
          <div className="flex flex-row gap-1">
            <div
              className={colorCollection}
              onClick={switchHandle}
            >
              My collection
            </div>
            <div
              className={colorLikes}
              onClick={switchHandle}
            >
              Likes
            </div>
          </div>
          <TracksCollection />
        </div>
      </div>
      <MusicPlayer />
    </>
  )
}
