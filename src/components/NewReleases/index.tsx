import type { AlbumModel } from '@/stores/models/AlbumModel'
import { NewRelease } from '../NewRelease'

interface INewReleasesProps {
  albums: AlbumModel[]
}

export const NewReleases = ({ albums }: INewReleasesProps) => {
  return (
    <>
      <div className="flex w-full flex-row flex-wrap gap-2">
        {albums.map(newRelease => {
          return (
            <NewRelease
              key={newRelease.id}
              album={newRelease}
            />
          )
        })}
      </div>
    </>
  )
}
