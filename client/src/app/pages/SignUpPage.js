import React, { useState, useEffect } from 'react'
import { BaseLayout } from '../layouts'
import { Link, Redirect } from 'react-router-dom';
import firebase, { db, auth } from '../utilities/firebase';
import { useAuth } from "../contexts/firebase/auth.context";
import styled from 'styled-components';
import styles from './SignUpPage.module.scss';
import 'bootstrap/dist/css/bootstrap.css';

const SignUpPage = () => {

  const { currentUser, signOut } = useAuth();


  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  const [emailError, setemailError] = useState()
  const [passwordError, setPasswordError] = useState()
  const [confirmPasswordError, setconfirmPasswordError] = useState()

  const handleSignUp = (e) => {
    if (password === confirmPassword) {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password)
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
    } else {
      e.preventDefault();
      setconfirmPasswordError('passwords do not match.')
    }

  }

  const Error = styled.p`
  color: red;
  font-size: 1rem;
`

  if (currentUser) {
    return <Redirect to='/' />
  } else {
    return (
      <BaseLayout>
        <div className="page page--sign-up">
          <div className="container">
            <div className="row">
              <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 ">
                <h1 className='mt-5 mb-5 text-center'>Sign up</h1>
                <form onSubmit={handleSignUp} className='d-flex flex-column'>
                  <div className="form-group">
                    <label className='w-100' htmlFor="email">
                      Email
                      <input className="form-control" type="text" name='email' id='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <Error>{emailError}</Error>
                  </div>

                  <div className="form-group">
                    <label className='w-100' htmlFor="password">
                      password
                    <input className="form-control" type="password" name='password' id='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <Error>{passwordError}</Error>
                  </div>
                  <div className="form-group">
                    <label className='w-100' htmlFor="confirmPassword">
                      confirm password
                      <input className="form-control" type="password" name='confirmPassword' id='confirmPassword' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </label>
                    <Error>{confirmPasswordError}</Error>
                  </div>
                  <input className="btn btn-primary w-100" type="submit" value="sign up" />
                </form>
              </div>
            </div>
          </div>
        </div>

      </BaseLayout>
    )
  }

}

export default SignUpPage
