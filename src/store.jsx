import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import pokemonReducer from "./components/Redux/redux-reducers";

const store = configureStore({
    reducer:{
        pokemon : pokemonReducer,
    },
    middleware: getDefaultMiddleware(),
})

export default store;