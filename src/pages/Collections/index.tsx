import { useState } from 'react'
import { TracksCollection } from '@/components/TracksCollection'
import './index.scss'

export const Collections = () => {
  const [isActive, setIsActive] = useState(true)
  const [colorCollection, setColorCollection] = useState('yellow')
  const [colorLikes, setColorLikes] = useState('silver')

  // REVIEW: очень странное решение с переключением. Тут надо написать отдельный компонент табов что бы не было такого
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
    <div className="content flex w-full flex-col gap-[1.5rem]">
      <div className="flex flex-row gap-1">
        <div
          className={`collections-btn ${colorCollection}`}
          onClick={switchHandle}
        >
          My collection
        </div>
        <div
          className={`collections-btn ${colorLikes}`}
          onClick={switchHandle}
        >
          Likes
        </div>
      </div>
      <TracksCollection />
    </div>
  )
}
