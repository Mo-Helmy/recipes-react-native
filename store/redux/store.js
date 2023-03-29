import { configureStore } from '@reduxjs/toolkit';
import favoriteSlice from './favoriteSlice';

const store = configureStore({
  reducer: {
    favorite: favoriteSlice.reducer,
  },
});

export default store;
