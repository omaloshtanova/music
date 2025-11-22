import search from '@assets/icons/search.svg'

export const Search = () => {
  return (
    <div className="search flex h-4 flex-row items-center gap-1.5">
      <img
        className="h-1"
        src={search}
        alt="search"
      />
      <span className="h3-semi-bold text-[var(--dark-grey)]">Search</span>
    </div>
  )
}
