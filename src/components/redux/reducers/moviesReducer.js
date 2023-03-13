const initialState = {
    movies:[]
  }
  
  export default function moviesReducer(state = initialState, action) {
    switch (action.type) {

      case 'SAVE_MOVIE' :{
        const movie = action.payload
        console.log(state)
        return {
            movies: state.movies.concat([movie])
        }
  
      }
      case 'DELETE_MOVIE':{
        let index = state.movies.findIndex(
          (movie)=>movie.imdbID==action.payload.imdbID
        )
        return {
          ...state,
          movies: state.movies.filter((movie) => movie.imdbID !== action.payload.imdbID)
        }
    }
      default:
        return state
    }
  }