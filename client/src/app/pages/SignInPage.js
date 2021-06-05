import { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { useAuth } from '../contexts/firebase/auth.context';
import { BaseLayout } from '../layouts';
import styled from 'styled-components';
import styles from './SignInPage.module.scss';

const SignInPage = ({ children }) => {
  const history = useHistory();
  const [signInForm, setSignInForm] = useState({
    txtEmail: '',
    txtPassword: ''
  });
  const { currentUser, signInWithEmailAndPassword, signOut } = useAuth();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const result = await signInWithEmailAndPassword(signInForm.txtEmail, signInForm.txtPassword);
    if (result) {
      history.goBack();
    }
  }

  const handleInputChange = async (ev) => {
    setSignInForm({
      ...signInForm,
      [ev.target.name]: ev.target.value
    })
  };

  const StyledLink = styled(Link)`
  font-size: 1rem;
  margin-bottom: 1rem;
  display: inline-block;
  `;

  return (
    <BaseLayout>
      <div className="page page--sign-in">
        <div className="container">
          <div className="row">
            <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 ">
              {!!currentUser === false &&
                <form onSubmit={(ev) => handleSubmit(ev)} className='d-flex flex-column'>
                  <div className="form-group">
                    <label htmlFor="txtEmail">Email address</label>
                    <input type="email" className="form-control" id="txtEmail" name="txtEmail" aria-describedby="emailHelp" onChange={handleInputChange} value={signInForm.txtEmail} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="txtPassword">Password</label>
                    <input type="password" className="form-control" id="txtPassword" name="txtPassword" onChange={handleInputChange} value={signInForm.txtPassword} />
                  </div>
                  <StyledLink to='forgotpassword' className='align-self-end'>Forgot password?</StyledLink>
                  <button type="submit" className="btn btn-primary w-100">Sign In</button>
                  <div className='d-flex flex-column align-items-center align-self-center '>
                    <span className='m-0 mt-2 '>Don't have an account?</span>
                    <Link className='' to='signup'>Sign up here</Link>
                  </div>
                </form>
              }
              {!!currentUser === true &&
                <div>
                  <img src={currentUser.photoURL} alt={currentUser.email} />
                  <button onClick={() => signOut()}>Sign out</button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default SignInPage;