import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addNewUser, selectUserStatus } from './userSlice'

const RegisterForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userStatus = useSelector(selectUserStatus)
  
  useEffect(() => {
    if(userStatus === 'succeeded'){
      navigate('/welcome')
    }
}, [userStatus, navigate])

 
  console.log(userStatus)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const onUsernameChanged = e => setUsername(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)

  const canSave = [username, password].every(Boolean)

  function handleUser(e){
    e.preventDefault()
  
    if(canSave){
      try{
        dispatch(addNewUser({ username: username, password: password})).unwrap()
        console.log(selectUserStatus, "in side")
      } catch(err){
        console.log('failed to add user', err)
      }
    }
    setUsername('')
    setPassword('')
  }

  return (
    <div className='register-form__container'>
      <h1>Make the most of the professional life</h1>
      <div className="register-form">
          <label htmlFor="username">Email or phone number</label>
          <input 
            type="text" 
            name='username'
            value={username}
            onChange={onUsernameChanged}  
          />
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name='password'
            value={password}
            onChange={onPasswordChanged}  
          />
          <p>By clicking Agree & Join, you agree to the LinkedIn User Agreement, 
            Privacy Policy, and Cookie Policy.</p>
          <button onClick={handleUser}>Agree & join</button>
      </div>
    </div>
  )
}

export default RegisterForm