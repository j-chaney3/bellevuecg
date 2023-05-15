import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { gardenbedsReducer } from '../features/slices/gardenbedsSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gardenbeds: gardenbedsReducer,
  
  },
});
