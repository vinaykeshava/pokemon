import { createAsyncThunk } from '@reduxjs/toolkit'
import pokemonActionTypes from "./redux-action-types"

export const fetchPokemonByName = createAsyncThunk(
  pokemonActionTypes.GET_POKEMON,
  async ({name},{ rejectWithValue }) => {
    console.log("name", name);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data);
    return data
  }
)
