import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import {
  ShowPageStyles,
  ShowHeader,
  Recommendations,
} from '../styles/ShowPageStyles';
import Row from './PosterRow';
import Spinner from '../utils/Spinner';

import { GlobalContext } from '../context/GlobalState';

const ShowPage = () => {
  const {
    showLoading,
    getShowInfo,
    getMovieInfo,
    getRecommendations,
    getCredits,
    recommendations,
    show,
    credits,
  } = useContext(GlobalContext);

  let params = useParams();

  let show_id = params.showId;
  let media_type = params.media;

  recommendations.map((recommendation) =>
    recommendation.first_air_date
      ? (recommendation.media_type = 'tv')
      : (recommendation.media_type = 'movie')
  );

  useEffect(() => {
    if (media_type === 'tv') {
      getShowInfo(show_id, media_type);
      getRecommendations(show_id, media_type);
      getCredits(show_id, media_type);
    } else if (media_type === 'movie') {
      getShowInfo(show_id, media_type);
      getRecommendations(show_id, media_type);
      getCredits(show_id, media_type);
    } else {
      getMovieInfo(show_id);
      getRecommendations(show_id, 'movie');
      getCredits(show_id, 'movie');
    }
  }, [show_id, media_type]);

  return showLoading ? (
    <Spinner />
  ) : (
    <ShowPageStyles>
      <ShowHeader
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${show?.backdrop}')`,
        }}
      >
        <div className='showInfo'>
          <h1>{show.title}</h1>
          {
            (show.media_type = 'tv' ? (
              <div className='seasons-episodes'>
                {show.num_episodes ? (
                  <>
                    <h6>{show.seasons.length} Seasons</h6>
                    <h6>{show.num_episodes} Episodes</h6>{' '}
                  </>
                ) : null}

                {show.runtime ? (
                  <h6>{show.runtime} minutes</h6>
                ) : show.episode_run_time.length > 1 ? (
                  <h6>
                    {show.episode_run_time[0]} - {show.episode_run_time[1]}{' '}
                    minutes
                  </h6>
                ) : (
                  <h6>{show.episode_run_time} minutes</h6>
                )}
              </div>
            ) : null)
          }

          <p>{show.overview}</p>

          {
            (show.media_type =
              'tv' && credits.length > 0 ? (
                <div className='subinfo'>
                  <p>
                    Starring:&nbsp;
                    {credits.slice(0, 4).map((actor, index) => (
                      <span key={actor.name}>
                        {(index ? ', ' : '') + actor.name}
                      </span>
                    ))}
                  </p>
                </div>
              ) : show.media_type === 'tv' ? (
                <div className='subinfo'>
                  <p>
                    Created By:&nbsp;
                    {show.created_by.slice(0, 4).map((creator, index) => (
                      <span key={creator.name}>
                        {(index ? ', ' : '') + creator.name}
                      </span>
                    ))}
                  </p>
                </div>
              ) : null)
          }

          <div className='subinfo'>
            <p>
              Genres:&nbsp;
              {show.genres.slice(0, 5).map((genre, index) => (
                <span key={genre.name}>
                  {(index ? ' || ' : '') + genre.name}
                </span>
              ))}
            </p>
          </div>
        </div>
      </ShowHeader>

      <Recommendations>
        <h2>You May Also Like</h2>
        {recommendations.length === 0 ? (
          <h3>
            Sorry, looks like this title is brand new! We're still updating our
            recommendations.
          </h3>
        ) : (
          <Row shows={recommendations} />
        )}
      </Recommendations>
    </ShowPageStyles>
  );
};

export default ShowPage;
