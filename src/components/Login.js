import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth } from '../firebase'
import '../styles/Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const dispatch = useDispatch()

  const register = () => {
    if (!name) {
      alert('Set name !')
    }
    auth
    .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic
        })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name, 
                photoURL: profilePic
              }))
          })
      }).catch(error =>
        console.log(error.message)
      )

  }
  const loginApp = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth=>{
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL
        }))
    }).catch(error=>alert(error))
  }
  return (
    <div className="login">

      <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="linked Logo" />

      <div className="login__card">
        <form action="">

          <input
            value={name} type="text"
            placeholder="Full name (required if registering)"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            value={profilePic}
            type="text" placeholder="Profile pic URL (optional)"
            onChange={(e) => setProfilePic(e.target.value)}
          />

          <input
            value={email} type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            value={password} type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={loginApp} className="login__btn">Sign In</button>

        </form>

      </div>

      <p>
        Not a member ?
        <span className="login__register" onClick={register}>
          Register now</span>
      </p>

      {/* <div className="login__footer">
        <div className="login__linkedin-logo">

        </div>
        <div className="login__links">
          CGU PC DC PRC PCo EF <br /> Langue
        </div>
      </div> */}
    </div>
  )
}

export default Login
