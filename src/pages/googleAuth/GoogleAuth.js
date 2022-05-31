import React from 'react'
import { signInWithGoogle } from '../../firebase-config'
import './styles.css'

export const GoogleAuth = () => {
  return (
    <div className='App'>
      <button onClick={signInWithGoogle}>Sign In With Google</button>

      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} alt="User Profile Pic" />
    </div>
  )
}
