import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { RowContainer, PosterRow } from '../styles/PosterRow';
import YouTube from 'react-youtube';

const API_KEY = 'd28739fd384011f5113cda5ac0aa175c';

const Row = ({ title, fetchUrl, fetchVideo, isLargeRow }) => {
  const [shows, setShows] = useState([]);
  const [videoKey, setVideoKey] = useState('');
  const [error, setError] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);

  const baseImageUrl = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setShows(response.data.results);
      // console.log(response.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const handleMouseEnter = (show) => {
    async function fetchVideo() {
      if (show.hasOwnProperty('first_air_date')) {
        const request = await axios.get(
          `https://api.themoviedb.org/3/tv/${show.id}/videos?api_key=${API_KEY}`
        );
        if (
          !Array.isArray(request.data.results) ||
          !request.data.results.length
        ) {
          setVideoKey('');
          setError(true);
        } else {
          const trailerVideo = request.data.results[0].key;
          setDelayHandler(
            setTimeout(() => {
              setVideoKey(trailerVideo);
            }, 700)
          );
        }
      } else {
        const request = await axios.get(
          `https://api.themoviedb.org/3/movie/${show.id}/videos?api_key=${API_KEY}`
        );
        if (
          !Array.isArray(request.data.results) ||
          !request.data.results.length
        ) {
          setVideoKey('');
          setError(true);
        } else {
          const trailerVideo = request.data.results[0].key;
          setDelayHandler(
            setTimeout(() => {
              setVideoKey(trailerVideo);
            }, 700)
          );
        }
      }
    }
    fetchVideo();
  };

  const handleMouseLeave = () => {
    setError(false);
    clearTimeout(delayHandler);
    setVideoKey('');
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <RowContainer>
      <h2>{title}</h2>
      <PosterRow>
        {shows.map((show) => (
          <img
            className={`${isLargeRow && 'posterLarge'}`}
            key={show.id}
            src={`${baseImageUrl}${
              isLargeRow ? show.poster_path : show.backdrop_path
            }`}
            alt={show.original_name}
            onMouseEnter={() => handleMouseEnter(show)}
            onMouseLeave={() => handleMouseLeave()}
          />
        ))}
      </PosterRow>
      {videoKey && <YouTube videoId={videoKey} opts={opts} />}
      {error && <h3>Sorry, no video for this show or movie was found.</h3>}
    </RowContainer>
  );
};

export default Row;
