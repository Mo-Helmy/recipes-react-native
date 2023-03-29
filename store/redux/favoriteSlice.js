import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    ids: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.ids = [action.payload.id, ...state.ids];
    },
    removeFromFavorite: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;
