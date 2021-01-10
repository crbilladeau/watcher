import React from 'react';
import { Link } from 'react-router-dom';
import Carousel, { slidesToShowPlugin  } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Poster from './Poster';
import { RowContainer, PosterRow } from '../styles/PosterRowStyles';

const Row = ({ title, shows }) => {
  const baseImageUrl = 'https://image.tmdb.org/t/p/original';
  shows.map((show) => (show.imagePath = baseImageUrl.concat(show.poster_path)));

  return (
    <RowContainer>
      <h2>{title}</h2>
      <PosterRow className='container'>
        <Carousel
          plugins={[
            'infinite',
            'arrows',
            'fastSwipe',
            {
              resolve: slidesToShowPlugin,
              options: {
              numberOfSlides: 6
              }
            },
          ]}
          breakpoints={{
            1600: {
              plugins: [        
              'infinite',
              'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 4
                }
              },
            ]
            },
            1200: {

              plugins: [              
                'infinite',
                'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3
                }
              },
            ]
            },
            900: {
              plugins: [
                'infinite',
                'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2
                }
              },
            ]
            },
            768: {
              plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2
                }
              },
            ]
            },
            400: {
              plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1
                }
              },
            ]
            }
          }}
        >
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
        </Carousel>
      </PosterRow>
    </RowContainer>
  );
};

export default Row;


