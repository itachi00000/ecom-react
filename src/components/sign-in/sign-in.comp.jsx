import React, { useState } from 'react';

import './sign-in.style.scss';

import FormInput from '../form-input/form-input.comp';
import CustomButton from '../custom-button/custom-button.comp';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default function SignIn({ emailSignInStart, googleSignInStart }) {
  const [userCrendentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setCredentials({ ...userCrendentials, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = userCrendentials;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ ...userCrendentials, email: '', password: '' });
    } catch (error) {
      console.log('Error at signIn', error.message);
    }
  };

  const { email, password } = userCrendentials;
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="password"
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
