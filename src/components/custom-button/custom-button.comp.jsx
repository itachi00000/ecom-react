import React from 'react';

import './custom-button.style.scss';

export default function CustomButton({
  children,
  isGoogleSignIn,
  ...otherProps
}) {
  return (
    <button
      // button or Submit??
      className={`${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
