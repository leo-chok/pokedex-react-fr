
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const pokemonsSlice = createSlice({
 name: 'pokemons',

  initialState,
 reducers: {
   addPokemonsToStore: (state, action) => {
     state.value.push(action.payload);
   },
 },
});

export const { addPokemonsToStore } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;