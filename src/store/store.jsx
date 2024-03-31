import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/MovieReducer'
import peopleReducer from './reducers/PeopleReducer'
import tvReducer from './reducers/TvReducer'

export default configureStore({

  reducer: {
    movie: movieReducer,
    people: peopleReducer,
    tv: tvReducer,

  }
})