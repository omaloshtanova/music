import type { AlbumModel } from '@stores/models/AlbumModel'

interface INewReleaseProps {
  album: AlbumModel
}

export const NewRelease = ({ album }: INewReleaseProps) => {
  return (
    <>
      <div className="flex w-9 flex-col gap-0.3">
        <img src={album.img!} />
        <span className="h4-reg text-[var(--white)]">{album.title}</span>
      </div>
    </>
  )
}
