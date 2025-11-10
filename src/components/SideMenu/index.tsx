import { useNavigate } from 'react-router-dom'
import homeActive from '@assets/icons/home-active.svg'
import playList from '@assets/icons/playlist.svg'
import radio from '@assets/icons/radio.svg'
import videos from '@assets/icons/videos.svg'
import user from '@assets/icons/user.svg'
import logout from '@assets/icons/logout.svg'
import logo from '@assets/icons/logo.svg'

import './index.scss'

export const SideMenu = () => {
  const navigate = useNavigate()
  return (
    <>
      <aside className="sidemenu flex flex-col items-center gap-1.5">
        <img
          src={logo}
          alt="logo"
          className="size-2"
        />
        <div className="menu flex flex-col gap-2">
          <img
            src={homeActive}
            alt="homeActive"
            onClick={() => {
              navigate('/')
            }}
          />
          <img
            src={playList}
            alt="playList"
            onClick={() => {
              navigate('/collections')
            }}
          />
          <img
            src={radio}
            alt="radio"
          />
          <img
            src={videos}
            alt="videos"
          />
        </div>
        <div className="menu flex flex-col gap-2">
          <img
            src={user}
            alt="user"
          />
          <img
            src={logout}
            alt="logout"
          />
        </div>
      </aside>
    </>
  )
}
