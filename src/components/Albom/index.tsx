import type { Albom as AlbomType } from "../../types/Albom"
interface Props {
  albom: AlbomType; 
}

export const Albom = ({ albom }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-[5px] w-[153px]">
        <img src={albom.img} />
        <span className="h4-reg text-[var(--white)]">{albom.title}</span>
      </div>
    </>
  )
}
