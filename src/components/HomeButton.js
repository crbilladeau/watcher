import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

const HomeButton = () => {
  const { searchedShow } = useContext(GlobalContext);
  const [search, resetSearch] = useState(searchedShow);
  return (
    <>
      <Link
        to='/'
        style={{ textDecoration: 'none' }}
        onClick={() => resetSearch([])}
      >
        <h1>watcher</h1>
      </Link>
    </>
  );
};

export default HomeButton;
