import React, { useEffect, useState } from "react";
import useStyles from "./listing-styles"
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function PokemonList() {

    const { classes } = useStyles();
    const [pokemons, setPokemons] = useState([])
    const [next, setNext] = useState("")
    const [prev, setPrev] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        api.get()
            .then((response) => {
                setPokemons(response.data.results)
                setCount(response.data.count)
                setNext(response.data.next)
                setPrev(response.data.previous)
            })
    }, [])

    const loadMorePokemons = () => {
        setTimeout(() => {
            axios.get(next)
                .then((response) => {
                    setPokemons((prevPokemons) => [
                        ...prevPokemons,
                        ...response.data.results
                    ])
                    setNext(response.data.next)
                    setPrev(response.data.previous)
                })
        }, 2000)
    }

    return (
        <div className={classes.root}>
            <Typography variant="h3">POKEMON NAMES</Typography>
            {pokemons.length > 0 ?
                <InfiniteScroll
                    className={classes.scroll}
                    dataLength={pokemons.length}
                    hasMore={count > pokemons.length ? true : false}
                    next={loadMorePokemons}
                    initialScrollY={0.5}
                    loader={<Grid container alignItems='center' justifyContent='center' spacing={2} className={classes.spinner}>
                        <CircularProgress />
                    </Grid>}
                >
                    <Grid container alignItems='center' justifyContent='center' flexDirection='row' spacing={2} >
                        {pokemons.map((pokemon) => {
                            return (
                                <Grid item key={pokemon.url} >
                                    <Link to={'/pokemon/' + pokemon.name} className={classes.link}>
                                        <Box key={pokemon.url} className={classes.box} >
                                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} className={classes.image} />
                                            <Typography variant="body1" className={classes.typography}>{pokemon.name}</Typography>
                                        </Box>
                                    </Link>
                                </Grid>
                            )
                        })}
                    </Grid>
                </InfiniteScroll>
                : null}
        </div>
    )
}