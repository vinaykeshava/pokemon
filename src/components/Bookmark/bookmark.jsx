import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useStyles from './bookmark-styles'
import { BookmarkAdd, BookmarkAdded } from "@mui/icons-material";
import { Stack } from "@mui/material";


export default function Bookmark() {

    const { classes } = useStyles();
    const [pokemons, setPokemons] = useState([]);
    const prefix = "pokemon/";

    const bookmarks = {};
    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith(prefix)) {
                setPokemons((prevPokemons) => [...prevPokemons, key]);
            }
        }
    }, [])

    const removeFromBookmark = (id) => {
        console.log("remove  bookmark");
        localStorage.removeItem("pokemon/" + id);
        setPokemons((prevPokemons) => prevPokemons.filter((pokemon) => pokemon !== "pokemon/" + id));
    }

    return (
        <Grid container alignItems='center' justifyContent='center' alignContent='flex-start' className={classes.root}>
             <Typography variant="h3" padding={3}>Bookmarked POKEMON </Typography>
            {pokemons &&
                <Grid container alignItems='center' justifyContent='center' flexDirection='row' spacing={2} >
                    {pokemons.map((pokemon) => {
                        const pokemonId = pokemon.replace(/^pokemon\//, '');
                        return (
                            <Grid item key={pokemonId} >
                                <Link to={'/pokemon/' + pokemonId} className={classes.link}>
                                    <Stack flexDirection='row' key={pokemonId} className={classes.box} >
                                        <Typography variant="body1" className={classes.typography}>{pokemonId}</Typography>
                                    </Stack>
                                </Link>
                                    <Box onClick={() => removeFromBookmark(pokemonId)}>
                                        <BookmarkAdded fontSize='medium' />
                                    </Box>
                            </Grid>
                        )
                    })}
                </Grid>
            }
            {pokemons.length === 0 && <Grid container justifyContent='center' alignItems='center'>
                <Grid item>
                    <Typography variant="h3">No Pokemons Bookmarked</Typography>
                </Grid>
            </Grid>}
        </Grid>
    )
}