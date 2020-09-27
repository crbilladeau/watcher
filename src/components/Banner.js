import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Banner, BannerHeader } from '../styles/BannerStyles';
import Spinner from '../utils/Spinner';

import { GlobalContext } from '../context/GlobalState';

const HeroBanner = ({ shows }) => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    let randomShow = Math.floor(Math.random() * shows.length);
    setBanner(shows[randomShow]);
  }, [shows]);

  const { getShowInfo, showLoading } = useContext(GlobalContext);

  const onPosterClick = (showId, media_type) => {
    getShowInfo(showId, media_type);
  };

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
        <Link
          to={`${banner?.id}`}
          style={{
            color: 'white',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
          onClick={() => onPosterClick(banner?.id, banner?.media_type)}
        >
          <h1>{banner?.title || banner?.name || banner?.original_name}</h1>
        </Link>

        <div>
          <button className='play'>Play</button>
          <button className='watcherList'>+ Watcher List</button>
          <p>{truncate(banner?.overview, 150)}</p>
        </div>
      </Banner>
    </BannerHeader>
  );
};

export default HeroBanner;
