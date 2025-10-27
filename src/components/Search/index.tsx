import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'

export const Search = () => {
  return (
    <>
      <div className="flex flex-row gap-[35px]">
        <img
          src={logo}
          alt="logo"
        />
        <div className="flex flex-row items-center gap-[22px]">
          <img
            className="h-[16px]"
            src={search}
            alt="search"
          />
          <span className="h3-semi-bold text-[var(--dark-grey)]">Search</span>
        </div>
      </div>
    </>
  )
}
