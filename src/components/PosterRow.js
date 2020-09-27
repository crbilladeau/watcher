import React from 'react';
import { Link } from 'react-router-dom';
import Poster from './Poster';
import { RowContainer, PosterRow } from '../styles/PosterRowStyles';

const Row = ({ title, shows }) => {
  const baseImageUrl = 'https://image.tmdb.org/t/p/original';
  shows.map((show) => (show.imagePath = baseImageUrl.concat(show.poster_path)));

  return (
    <RowContainer>
      <h2>{title}</h2>
      <PosterRow className='container'>
        {shows.map((show) => (
          <Link
            to={`/${show.media_type}/${show.id}`}
            key={show.id}
            style={{ textDecoration: 'none' }}
          >
            <Poster
              id={show.id}
              image={show.imagePath}
              title={show.title || show.original_name}
              description={show.overview}
            />
          </Link>
        ))}
      </PosterRow>
    </RowContainer>
  );
};

export default Row;
