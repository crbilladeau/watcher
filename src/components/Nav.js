import React from 'react';
import HomeButton from './HomeButton';
import SearchBar from './SearchBar';
import { NavStyles, Avatar } from '../styles/NavStyles';

const Nav = () => {
  return (
    <NavStyles>
      <HomeButton />
      <SearchBar />
      <Avatar
        src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
        alt='Profile icon'
      />
    </NavStyles>
  );
};

export default Nav;
