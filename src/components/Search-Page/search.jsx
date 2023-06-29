import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import useStyles from "./search-styles";
import { useDispatch } from 'react-redux'
import TextField from "@mui/material/TextField";
// import { fetchPokemonByName } from "../Redux/redux-thunks"
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

export default function Search() {

    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const { classes } = useStyles();

    const onSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        setPokemon({})
        setLoading(true);
        setTimeout(() => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
                .then(response => {
                    console.log("resp -> ", response.data);
                    setPokemon(response.data)
                })
                .catch(error => {
                    if (error.response && error.response.status === 404) {
                        alert('No Pokemon Found');
                    }
                    else {
                        alert('Internal Server Error')
                    }
                })
                .finally(() => {
                    setLoading(false);
                })
        }, 3000)
    }

    return (
        <Grid className={classes.container} container justifyContent='center' flexDirection='column' alignItems='center' spacing={2}>
            <Grid item>
                <form onSubmit={handleSearch}>
                    <TextField
                        id="outlined-required"
                        label="Search"
                        placeholder="pikachu"
                        onChange={onSearchChange}
                    />
                </form>
            </Grid>


            {loading ?
                (<Grid item>
                    <CircularProgress />
                </Grid>
                ) : null
            }

            {Object.keys(pokemon).length === 0 ?
                <Grid item>
                    <Typography variant="h3">Search to get pokemon details</Typography>
                </Grid> : null
            }

            {Object.keys(pokemon).length === 0 ? null :
                < div >
                    <pre> {JSON.stringify(pokemon, null, 2)}</pre>
                </div >
            }
        </Grid >
    )
}
