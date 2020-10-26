import React from 'react';

// styled-comp
import { CustomButtonContainer } from './custom-button.style';

// import './custom-button.style.scss';

export default function CustomButton({ children, ...props }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
  );
}
