import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counterslice';
import userReducer from '../redux/userslice';

export const store = configureStore({ // tanımlanan sliceleri toplayan bir depo olarak düşünebiliriz
  reducer: {
    counter:counterReducer,
    user:userReducer,
  },
})