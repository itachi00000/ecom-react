import React from 'react';

import './sign-in-and-sign-up.style.scss';
import SignIn from '../../components/sign-in/sign-in.comp';
import SignUp from '../../components/sign-up/sign-up.comp';

export default function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}
