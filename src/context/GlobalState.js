import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

const API_KEY = 'd28739fd384011f5113cda5ac0aa175c';
const baseURL = 'https://api.themoviedb.org/3';

// initial state
const initialState = {
  shows: {
    trending: [],
    toprated: [],
  },
  movies: {
    actionMovies: [],
    animationMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
  },
  show: {
    title: '',
    backdrop: '',
    episode_run_time: 0,
    runtime: 0,
    seasons: [],
    num_episodes: 0,
    genres: [],
    overview: '',
    created_by: [],
  },
  credits: [],
  recommendations: [],
  error: null,
  loading: false,
  showLoading: false,

  searchedShow: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  async function getShows() {
    try {
      dispatch({
        type: 'GET_SHOWS_REQUEST',
      });
      const response = await Promise.all([
        axios.get(
          `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`
        ),
        axios.get(
          `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
        ),
      ]).then((response) => {
        // console.log(response);
        dispatch({
          type: 'GET_SHOWS',
          payload: response,
        });
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function getDiscoverMovies() {
    try {
      const response = await Promise.all([
        axios.get(
          `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        ),
        axios.get(
          `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=16`
        ),
        axios.get(
          `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        ),
        axios.get(
          `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        ),
        axios.get(
          `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        ),
      ]);
      dispatch({
        type: 'GET_MOVIES',
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function getShowInfo(show_id, media_type) {
    try {
      if (media_type === 'tv') {
        // dispatch({
        //   type: 'GET_SHOWINFO_REQUEST',
        // });
        const response = await axios.get(
          `${baseURL}/tv/${show_id}?api_key=${API_KEY}&language=en-US`
        );
        console.log(response);
        dispatch({
          type: 'GET_SHOWINFO',
          payload: response,
        });
      } else if (media_type === 'movie') {
        // dispatch({
        //   type: 'GET_SHOWINFO_REQUEST',
        // });
        const response = await axios.get(
          `${baseURL}/movie/${show_id}?api_key=${API_KEY}&language=en-US`
        );
        console.log(response);
        dispatch({
          type: 'GET_SHOWINFO',
          payload: response,
        });
      }
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function getCredits(show_id, media_type) {
    try {
      if (media_type === 'tv') {
        const response = await axios.get(
          `${baseURL}/tv/${show_id}/credits?api_key=${API_KEY}&language=en-US`
        );
        // console.log(response);
        dispatch({
          type: 'GET_CREDITS',
          payload: response,
        });
      } else if (media_type === 'movie') {
        const response = await axios.get(
          `${baseURL}/movie/${show_id}/credits?api_key=${API_KEY}&language=en-US`
        );
        // console.log(response);
        dispatch({
          type: 'GET_CREDITS',
          payload: response,
        });
      }
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function getMovieInfo(movie_id) {
    try {
      dispatch({
        type: 'GET_SHOWINFO_REQUEST',
      });
      const response = await axios.get(
        `${baseURL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
      );
      // console.log(response);
      dispatch({
        type: 'GET_SHOWINFO',
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  // async function getEpisodes(tv_id, season_number) {
  //   try {
  //     const response = await axios.get(
  //       `${baseURL}/tv/${tv_id}/season/${season_number}?api_key=${API_KEY}&language=en-US`
  //     );
  //     // console.log(response);
  //     dispatch({
  //       type: 'GET_EPISODES',
  //       payload: response,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: 'FETCH_ERROR',
  //       payload: err.response.data.error,
  //     });
  //   }
  // }

  async function getRecommendations(show_id, media_type) {
    try {
      if (media_type === 'tv') {
        dispatch({
          type: 'GET_RECOMMENDATIONS_REQUEST',
        });
        const response = await axios.get(
          `${baseURL}/tv/${show_id}/recommendations?api_key=${API_KEY}&language=en-US`
        );
        // console.log(response);
        dispatch({
          type: 'GET_RECOMMENDATIONS',
          payload: response,
        });
      } else if (media_type === 'movie') {
        dispatch({
          type: 'GET_RECOMMENDATIONS_REQUEST',
        });
        const response = await axios.get(
          `${baseURL}/movie/${show_id}/recommendations?api_key=${API_KEY}&language=en-US`
        );
        // console.log(response);
        dispatch({
          type: 'GET_RECOMMENDATIONS',
          payload: response,
        });
      }
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function searchShows(query) {
    if (query === '') {
      return;
    }
    try {
      dispatch({
        type: 'GET_SHOWINFO_REQUEST',
      });
      const response = await axios.get(
        `${baseURL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
      );
      // response.data.results.media_type = 'movie';
      if (response.data.results.length < 1) {
        return;
      }
      dispatch({
        type: 'GET_SEARCHEDSHOW',
        payload: response,
      });
      console.log(response);
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response.data.error,
      });
    }
    try {
      dispatch({
        type: 'GET_SEARCH_REQUEST',
      });
      const response = await axios.get(
        `${baseURL}/search/tv?api_key=${API_KEY}&language=en-US&query=${query}`
      );
      // response.data.results.media_type = 'tv';
      if (response.data.results.length < 1) {
        return;
      }
      dispatch({
        type: 'GET_SEARCHEDSHOW',
        payload: response,
      });
      // console.log(response);
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  useEffect(() => {
    getShows();
    getDiscoverMovies();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        shows: {
          trending: state.shows.trending,
          toprated: state.shows.toprated,
        },
        movies: {
          actionMovies: state.movies.actionMovies,
          animationMovies: state.movies.animationMovies,
          comedyMovies: state.movies.comedyMovies,
          horrorMovies: state.movies.horrorMovies,
          romanceMovies: state.movies.romanceMovies,
        },
        show: {
          title: state.show.title,
          original_title: state.show.original_title,
          backdrop: state.show.backdrop,
          episode_run_time: state.show.episode_run_time,
          runtime: state.show.runtime,
          seasons: state.show.seasons,
          num_episodes: state.show.num_episodes,
          genres: state.show.genres,
          overview: state.show.overview,
          created_by: state.show.created_by,
        },
        credits: state.credits,
        recommendations: state.recommendations,
        getShowInfo,
        getMovieInfo,
        getRecommendations,
        getCredits,
        searchShows,
        loading: state.loading,
        showLoading: state.showLoading,
        error: state.error,

        searchedShow: state.searchedShow,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
