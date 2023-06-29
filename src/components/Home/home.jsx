import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Home(){
    return(
        <Grid container justifyContent='center' alignItems='center' spacing={2} height='calc(100vh - 64px)' flexDirection='column'>
            <Grid item>
                <Typography variant="h3">Welcome</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">Click Search Button to search</Typography>
            </Grid>
        </Grid>
    )
}