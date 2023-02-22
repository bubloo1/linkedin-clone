import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Profile from '../assets/img/user-solid.svg'

const HomePageNavbar = () => {
  return (
    <div className='homepage-navbar'>
      <div className="homepage-navbar__container">
        <div className="homepage-left">
          <FontAwesomeIcon className='home-linkedin__icon' icon={faLinkedin}/>
          <input type='text'/>
        </div>
        <div className="homepage-right">
          <div className="homepage-icon">
            <FontAwesomeIcon className='home-icon' icon={faHouse}/>
            <p>Home</p>
          </div>
          <div className="homepage-icon">
            <FontAwesomeIcon className='home-icon' icon={faUserGroup}/>
            <p>My Network</p>
          </div>
          <div className="homepage-icon">
            <FontAwesomeIcon className='home-icon' icon={faSuitcase}/>
            <p>jobs</p>
          </div>
          <div className="homepage-icon">
            <FontAwesomeIcon className='home-icon' icon={faMessage}/>
            <p>Messaging</p>
          </div>
          <div className="homepage-icon">
            <FontAwesomeIcon className='home-icon' icon={faBell}/>
            <p>Notification</p>
          </div>
          <div className="homepage-icon">
            <FontAwesomeIcon className='home-icon' icon={Profile}/>
            <p>ME</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageNavbar