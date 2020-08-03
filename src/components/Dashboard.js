import React from 'react';
import requests from '../requests';
import Nav from './Nav';
import HeroBanner from './HeroBanner';
import Row from './Row';

const Dashboard = () => {
  return (
    <div>
      <Nav />
      <HeroBanner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Animation' fetchUrl={requests.fetchAnimation} />
    </div>
  );
};

export default Dashboard;
