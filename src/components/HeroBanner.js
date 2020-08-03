import React, { useState, useEffect } from 'react';
import { Banner, BannerHeader, FadeBottom } from '../styles/Banner';
import axios from '../axios';
import requests from '../requests';

const HeroBanner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const randomMovie = Math.floor(
        Math.random() * response.data.results.length - 1
      );
      setBanner(response.data.results[randomMovie]);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <BannerHeader
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${banner?.backdrop_path}')`,
      }}
    >
      <Banner>
        <h1>{banner?.title || banner?.name || banner?.original_name}</h1>
        <div>
          <button className='play'>Play</button>
          <button className='myList'>My List</button>
          <h3>{truncate(banner?.overview, 150)}</h3>
        </div>
      </Banner>
      <FadeBottom />
    </BannerHeader>
  );
};

export default HeroBanner;
