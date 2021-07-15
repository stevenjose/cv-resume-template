import { configureStore } from '@reduxjs/toolkit'
import personReducer from './personReducer'
export default configureStore({
  reducer: {
    person: personReducer
  },
});