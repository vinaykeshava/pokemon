import { Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from './home-styles'

export default function Home() {
    const { classes } = useStyles();
    return (
        <Grid container justifyContent='center' alignItems='center' className={classes.root}>
            <Grid container justifyContent='center' alignItems='center' spacing={2}  flexDirection='column' className={classes.container} >
                <Grid item>
                    <Typography variant="h3">Welcome</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1">Click on Pokemon in Navbar to return home</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1">Click Search Button to search</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1">Click List Button to get List of Pokemons</Typography>
                    <Typography variant="body2">click on any pokemon in the list to see its details</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1">Click Bookmark Button to see bookmarks</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}