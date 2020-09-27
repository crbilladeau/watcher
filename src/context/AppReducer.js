export default (state, action) => {
  switch (action.type) {
    case 'GET_SHOWS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_SHOWS':
      return {
        ...state,
        loading: false,
        shows: {
          trending: action.payload[0].data.results,
          toprated: action.payload[1].data.results,
        },
      };
    case 'GET_MOVIES':
      return {
        ...state,
        loading: false,
        movies: {
          actionMovies: action.payload[0].data.results,
          animationMovies: action.payload[1].data.results,
          comedyMovies: action.payload[2].data.results,
          horrorMovies: action.payload[3].data.results,
          romanceMovies: action.payload[4].data.results,
        },
      };
    case 'GET_SHOWINFO_REQUEST':
      return {
        ...state,
        showLoading: true,
      };
    case 'GET_SHOWINFO':
      return {
        ...state,
        showLoading: false,
        show: {
          title:
            action.payload.data.name ||
            action.payload.data.title ||
            action.payload.data.original_title,
          backdrop: action.payload.data.backdrop_path,
          episode_run_time: action.payload.data.episode_run_time,
          runtime: action.payload.data.runtime,
          seasons: action.payload.data.seasons,
          num_episodes: action.payload.data.number_of_episodes,
          genres: action.payload.data.genres,
          overview: action.payload.data.overview,
          created_by: action.payload.data.created_by,
        },
      };
    case 'GET_CREDITS':
      return {
        ...state,
        // loading: true,
        credits: action.payload.data.cast,
      };
    case 'GET_RECOMMENDATIONS_REQUEST':
      return {
        ...state,
        showLoading: true,
      };
    case 'GET_RECOMMENDATIONS':
      return {
        ...state,
        // loading: false,
        recommendations: action.payload.data.results,
      };

    case 'GET_SEARCH_REQUEST':
      return {
        ...state,
      };

    case 'GET_SEARCHEDSHOW':
      return {
        ...state,
        searchedShow: action.payload.data.results,
      };

    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
