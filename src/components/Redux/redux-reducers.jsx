import { createReducer } from "@reduxjs/toolkit";
import pokemonActionTypes from './redux-action-types'

const intialPokemonState = {
    pokemons: [],
    isLoading: false,
    error: null
};

const pokemonReducer = createReducer(intialPokemonState, (builder) => {
    builder.addCase(pokemonActionTypes.GET_POKEMON_REQUEST, (state) => {
        console.log("Request");
        state.isLoading = true;
        state.error = null;
    });

    builder.addCase(pokemonActionTypes.GET_POKEMON_SUCCESS, (state, { payload }) => {
        // state.pokemons = payload
        console.log("Success",payload);
    })

    builder.addCase(pokemonActionTypes.GET_POKEMON_FAILURE, (state, {payload}) =>{
        console.log("failure",payload);
    })
})

export default pokemonReducer;