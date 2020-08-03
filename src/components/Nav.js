import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { NavStyles, Logo, Avatar } from '../styles/Nav';

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <NavStyles show={show}>
      <Logo
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png'
        alt='Netflix Logo'
      />
      <Avatar
        src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
        alt='Profile icon'
      />
    </NavStyles>
  );
};

export default Nav;
