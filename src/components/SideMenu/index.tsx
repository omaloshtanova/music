import homeActive from '../../assets/home-active.svg'
import playList from '../../assets/playlist.svg'
import radio from '../../assets/radio.svg'
import videos from '../../assets/videos.svg'
import user from '../../assets/user.svg'
import logout from '../../assets/logout.svg'

import './index.scss'
import { useNavigate } from 'react-router-dom'

export const SideMenu = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <div className="menu flex flex-col gap-[31px]">
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
        <div className="menu flex flex-col gap-[31px]">
          <img
            src={user}
            alt="user"
          />
          <img
            src={logout}
            alt="logout"
          />
        </div>
      </div>
    </>
  )
}
