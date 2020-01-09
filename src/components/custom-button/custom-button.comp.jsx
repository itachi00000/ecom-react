import React from 'react';

import './custom-button.style.scss';

export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      // button or Submit??
      className={`${inverted ? 'inverted' : ''}
      ${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
