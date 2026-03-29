import type { AlbumModel } from '@stores/models/AlbumModel'

interface INewReleaseProps {
  album: AlbumModel
}

export const NewRelease = ({ album }: INewReleaseProps) => {
  return (
    <div className="flex w-9 flex-col gap-1">
      <img
        className="h-9 w-9"
        src={album.img!}
      />
      <span className="h4-reg text-[var(--white)]">{album.title}</span>
    </div>
  )
}
