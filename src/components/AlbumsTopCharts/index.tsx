import type { AlbumModel } from '@/stores/models/AlbumModel'
import { AlbumTopCharts } from '../AlbumTopCharts'

interface IAlbomListProps {
  albums: AlbumModel[]
}

export const AlbumsTopCharts = ({ albums }: IAlbomListProps) => {
  return (
    <div className="flex w-full flex-col gap-1">
      {albums.slice(0, 3).map(album => (
        <AlbumTopCharts
          key={album.id}
          album={album}
        />
      ))}
    </div>
  )
}
