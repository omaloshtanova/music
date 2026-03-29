import { useNavigate } from 'react-router-dom'
import homeActive from '@assets/icons/home-active.svg'
import playList from '@assets/icons/playlist.svg'
import radio from '@assets/icons/radio.svg'
import videos from '@assets/icons/videos.svg'
import user from '@assets/icons/user.svg'
import logout from '@assets/icons/logout.svg'
import './index.scss'

interface IBurgerMenuProps {
  isOpen: boolean
  onItemClick: (isOpen: boolean) => void
}

export const BurgerMenu = ({ isOpen, onItemClick }: IBurgerMenuProps) => {
  const navigate = useNavigate()

  const handleCloseBurgerClick = () => {
    onItemClick(false)
  }

  return (
    <aside className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <div className="flex w-full flex-row justify-end">
        <span
          className="h1-bold text-[var(--white)]"
          onClick={handleCloseBurgerClick}
        >
          X
        </span>
      </div>
      <div
        className="burger-menu__row"
        onClick={() => {
          navigate('/')
          onItemClick(false)
        }}
      >
        <img
          src={homeActive}
          alt="homeActive"
          className='h-[1.5rem] w-[1.5rem] object-cover bg-center'
        />
        <span className="h5-bold text-[var(--white)]">Home</span>
      </div>
      <div
        className="burger-menu__row"
        onClick={() => {
          navigate('/collections')
          onItemClick(false)
        }}
      >
        <img
          src={playList}
          alt="playList"
        />
        <span className="h5-bold text-[var(--white)]">My collecions</span>
      </div>
      <div className="burger-menu__row">
        <img
          src={radio}
          alt="radio"
        />
        <span className="h5-bold text-[var(--white)]">Radio</span>
      </div>
      <div className="burger-menu__row">
        <img
          src={videos}
          alt="videos"
        />
        <span className="h5-bold text-[var(--white)]">Music video</span>
      </div>
      <div className="burger-menu__row">
        <img
          src={user}
          alt="user"
        />
        <span className="h5-bold text-[var(--white)]">Profile</span>
      </div>
      <div className="burger-menu__row">
        <img
          src={logout}
          alt="logout"
        />
        <span className="h5-bold text-[var(--white)]">Log out</span>
      </div>
    </aside>
  )
}
