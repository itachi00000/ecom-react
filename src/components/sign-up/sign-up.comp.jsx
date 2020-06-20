import React, { useState } from 'react';

import FormInput from '../form-input/form-input.comp';
import CustomButton from '../custom-button/custom-button.comp';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss';

export default function SignUp() {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials;

    if (password !== confirmPassword) {
      alert('password dont match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      // reset after submit
      setCredentials({
        ...userCredentials,
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.log('Error at Signup', error.message);
    }
  };

  const { displayName, email, password, confirmPassword } = userCredentials;
  return (
    <div className="sign-up">
      <h2 className="title">! do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </div>
  );
}
