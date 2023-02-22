import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'
import Profile from '../../assets/img/user-solid.svg'

const PostCard = () => {

    function handlePost(){

    }

  return (
    <div className='postcard'>
        <div className="postcard-container">
            <div className="postcard-top">
                <img className='card-img' src={Profile} alt="" />
                <form action="" onSubmit={handlePost}>
                <input type="text" placeholder='Start to post' />
                </form>
            </div>
            <div className="postcard-bottom">
                <div className="button-photo">
                    <FontAwesomeIcon className='image-icon' icon={faImage}/>
                    <button>Photo</button>
                </div>
                <div className="button-photo">
                    <FontAwesomeIcon className='card-icon' icon={faPlay}/>
                    <button>Video</button>
                </div>
                <div className="button-photo">
                    <FontAwesomeIcon className='card-icon' icon={faCalendar}/>
                    <button>Event</button>
                </div>
                <div className="button-photo">
                    <FontAwesomeIcon className='card-icon' icon={faNewspaper}/>
                    <button>Write Article</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard