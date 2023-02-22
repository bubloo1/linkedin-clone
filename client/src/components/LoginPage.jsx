import React from 'react'
import { Outlet } from 'react-router'
import LoginNavbar from './LoginNavbar'
import SigninForm from './SigninForm'

const LoginPage = () => {
  return (
    <div className='app'>
        <LoginNavbar/>
        <SigninForm/>
    </div>
  )
}

export default LoginPage