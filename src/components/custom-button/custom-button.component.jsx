import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  close,
  ...otherProps
}) => (
  <button
    className={`${close ? 'close' : ''} ${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
