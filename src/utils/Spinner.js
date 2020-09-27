import React from 'react';
import spinner from '../images/spinner.gif';
import { SpinnerStyles } from '../styles/SpinnerStyles';

const Spinner = () => {
  return (
    <SpinnerStyles>
      <img src={spinner} alt='loading spinner' />
    </SpinnerStyles>
  );
};

export default Spinner;
