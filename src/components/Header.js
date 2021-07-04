import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import NotificationIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';
import '../styles/Header.css';
import HeaderOption from './HeaderOption';


const Header = () => {
  const dispacth = useDispatch()

  const logoutOfApp = () => {
    dispacth(logout())
    auth.signOut()
  }
  return (
    <div className="header">

      <div className="header__left">
        <img src="/img/linkedin.svg" alt="linkedin" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder='Search'/>
        </div>

      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationIcon} title="Notifaications" />
        <HeaderOption avatar={true} title='me' onClick={logoutOfApp} />

      </div>
    </div>
  )
}

export default Header
