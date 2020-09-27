import React, { useContext } from 'react';
import Banner from './Banner';
import Row from './PosterRow';
import Spinner from '../utils/Spinner';

import { GlobalContext } from '../context/GlobalState';

const Dashboard = () => {
  const { shows, movies, loading, showLoading } = useContext(GlobalContext);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Banner shows={shows.trending} />
      <Row title='Trending Now' shows={shows.trending} />
      <Row title='Top Rated' shows={shows.toprated} />
      <Row title='Action Movies' shows={movies.actionMovies} />
      <Row title='Animation' shows={movies.animationMovies} />
      <Row title='Comedy Movies' shows={movies.comedyMovies} />
      <Row title='Horror Movies' shows={movies.horrorMovies} />
      <Row title='Romance Movies' shows={movies.romanceMovies} />
    </>
  );
};

export default Dashboard;
