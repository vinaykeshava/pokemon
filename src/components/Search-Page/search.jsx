import React, { useEffect } from "react";
import useStyles from "./search-styles";
// import { useDispatch } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchPokemonByName } from "../Redux/redux-thunks"
import { Policy } from "@mui/icons-material";

export default function Search() {
    
    const dispatch = useDispatch();
    const pokemon = fetchPokemonByName();

    useEffect(() => {
        const results = dispatch(pokemon({ name: "pikachu" }))
        console.log("pokemons =>", results);
    }, [])

    return (
        <div>
            search page
        </div>
    )
}