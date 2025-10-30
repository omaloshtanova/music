import type { AlbumModel } from "../../stores/models/AlbumModel";

interface Props {
  album: AlbumModel; 
}

export const Album = ({ album }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-[5px] w-[153px]">
        <img src={album.img!} />
        <span className="h4-reg text-[var(--white)]">{album.title}</span>
      </div>
    </>
  )
}
