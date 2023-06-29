import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useStyles from './appbar-styles'
import { Link, useNavigate } from 'react-router-dom';
import Bookmark from './../Bookmark/bookmark';


export default function AppBar() {

  const { classes } = useStyles();
  const navigate = useNavigate()

  const routeToSearch = () => {
    navigate('/search')
  }

  const routeToHome = () => {
    navigate('/')
  }
  const routeToList = () => {
    navigate('/list')
  }
  const routeToBookmark = () => {
    navigate('/bookmark')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          <Typography onClick={routeToHome} variant="h6" component="div" sx={{ flexGrow: 1 }} className={classes.typography}>
            POKEMON
          </Typography>
          <Button variant='contained' onClick={routeToSearch} className={classes.button}>Search</Button>
          <Button variant='contained' onClick={routeToList} className={classes.button}>List Pokemons</Button>
          <Button variant='contained' onClick={routeToBookmark} className={classes.button}>Bookmarks</Button>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}