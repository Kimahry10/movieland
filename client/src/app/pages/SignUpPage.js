import React, { useState, useEffect } from 'react'
import { BaseLayout } from '../layouts'
import { Link } from 'react-router-dom';
import firebase, { db, auth } from '../utilities/firebase';
import { useAuth } from "../contexts/firebase/auth.context";
import styled from 'styled-components';

const SignUpPage = () => {

  const [user, setUser] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const [emailError, setemailError] = useState()
  const [passwordError, setPasswordError] = useState()

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case  "auth/user-not-found":
            setemailError(err.message)
            break;
          case "auth/wrong-password": 
          setPasswordError(err.message);
          break;
      }
      })
  }

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      // console.log(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-used":
          case "auth/invalid-email":
            setemailError(err.message)
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

const Error = styled.p `
  color: red;
  font-size: 1rem;
`


  return (
    <BaseLayout>
      <label htmlFor="">Email</label>
      <input type="text" required value={email} onChange={(e) => setEmail(e.target.value) } />
      <label htmlFor="password">password</label>
      <Error>{emailError}</Error>
      <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>sign up</button>
      <Error>{passwordError}</Error>
    </BaseLayout>
  )
}

export default SignUpPage
