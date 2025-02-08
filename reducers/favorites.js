
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const favoritesSlice = createSlice({
 name: 'favorites',

  initialState,
 reducers: {
   addFavoritesToStore: (state, action) => {
     if (state.value.find((e) => e.name == action.payload.name)) {
        console.log("Article est déjà booké");
        let index = state.value.findIndex((e) => e.name == action.payload.name);
        state.value.splice(index,1);
      } else {
        console.log("Article n'est pas encore booké");
        state.value.push(action.payload);
      }
   },
 },
});

export const { addFavoritesToStore } = favoritesSlice.actions;
export default favoritesSlice.reducer;