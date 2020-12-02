import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router';
import { SearchBarStyles } from '../styles/SearchBarStyles';

import { GlobalContext } from '../context/GlobalState';

const SearchBar = ({ history }) => {
  const { searchShows, searchedShow, getShowInfo, getMovieInfo } = useContext(
    GlobalContext
  );
  const [search, setSearch] = useState([]);

  const onChange = (q) => {
    setSearch(q);
    searchShows(q);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(searchedShow);
    let showId = searchedShow[0].id;
    // console.log(showId);

    if (!searchedShow[0].hasOwnProperty('first_air_date')) {
      // getShowInfo(showId, 'movie');
      let mediaType = 'movie';
      await getMovieInfo(showId, 'movie');
      history.push(`/${mediaType}/${showId}`);
    } else if (searchedShow[0].hasOwnProperty('first_air_date')) {
      let mediaType = 'tv';
      await getShowInfo(showId, 'tv');
      history.push(`/${mediaType}/${showId}`);
    } else if (searchedShow.length < 1) {
      return;
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <SearchBarStyles
        type='text'
        placeholder='Search shows...'
        value={search}
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
};

export default withRouter(SearchBar);
