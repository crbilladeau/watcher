import React, { useContext, useState } from 'react';
import { SearchBarStyles } from '../styles/SearchBarStyles';

import { GlobalContext } from '../context/GlobalState';

const SearchBar = () => {
  const { searchShows, searchedShow, getShowInfo, getMovieInfo } = useContext(
    GlobalContext
  );
  const [search, setSearch] = useState([]);

  const onChange = (q) => {
    setSearch(q);
    searchShows(q);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(searchedShow);
    let showId = searchedShow[0].id;
    console.log(showId);
    getShowInfo(showId, 'movie');
    getMovieInfo(showId, 'movie');
  };

  return (
    <form onSubmit={onSubmit}>
      <SearchBarStyles
        type='text'
        placeholder='Search shows'
        value={search}
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
