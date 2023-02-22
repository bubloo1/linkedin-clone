import React from 'react'
import PostCard from '../features/post/PostCard'
import '../App.css'
import HomePageNavbar from './HomePageNavbar'
const WelcomePage = () => {
  return (
    <div className='app'>
      
      <HomePageNavbar/>
      <PostCard/>

    </div>
  )
}

export default WelcomePage