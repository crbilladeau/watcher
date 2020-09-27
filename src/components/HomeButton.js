import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1>watcher</h1>
      </Link>
    </>
  );
};

export default HomeButton;
