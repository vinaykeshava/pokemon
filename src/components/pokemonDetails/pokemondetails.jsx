import { Box, Button, Grid, LinearProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import api_individual from '../../services/apiIndividual';
import useStyles from './pokemondetails-styles'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdd';


function PokemonsDetails() {
    const { id } = useParams()

    const [list, setList] = useState([]);
    const [error, setError] = useState(!id);

    const { classes } = useStyles();

    useEffect(() => {
        console.log("id", id);
        api_individual.get(id).then(({ data }) => {
            setList(data)
        })
            .catch(() => {
                setError(true)
            })
    }, [id]);

    return (
        <>
            {!error && (
                <Grid container className={classes.root} flexDirection='row' justifyContent='space-around' >
                    <Grid container className={classes.container} alignItems='center' alignContent='space-around' spacing={2} flexDirection='column' width='40vw'>
                        <Grid item className="subContainer">
                            <Typography variant="h4" className="nomes" sx={{ mt: 1 }}>
                                {list.name}
                            </Typography>
                        </Grid>
                        <Grid item className="image">
                            <Box>
                                <img
                                    src={list?.sprites?.front_default}
                                    alt={list.name}
                                    className={classes.image}
                                />
                            </Box>
                        </Grid>
                        <Grid item className="info">
                            <Typography
                                variant="h5"
                                sx={{ m: 1 }}
                                className="infotypo"
                            >
                                #{list.id}
                            </Typography>

                            <Typography
                                variant="h5"
                                sx={{ m: 1 }}
                                className="nomes"
                            >
                                Pokemon type:  {list?.types?.map((item) => item.type.name.concat(' '))}
                            </Typography>
                        </Grid>

                        <Grid item
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Link to={"/"}>
                                <Button
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    size="large"
                                    sx={{
                                        mt: 4
                                    }}
                                >
                                    Return home
                                </Button>
                            </Link>
                        </Grid>

                    </Grid>

                    <Grid container className={classes.container} alignItems='center' alignContent='space-around' spacing={2} flexDirection='column' width='40vw'>
                        <Grid item className='subcontainer'>
                            <Typography
                                variant="h4"
                                sx={{
                                    textAlign: 'center',
                                }}
                                className="titulos"
                            >
                                Information
                            </Typography>
                            <Grid container justifyContent='center' className=''>
                                {list?.stats?.map((item, index) => {
                                    return (
                                        <Grid item key={item.stat.name} className=''>
                                            <Typography
                                                variant="h6"
                                                sx={{ ml: 1 }}
                                                className="nomes"
                                            >
                                                {item.stat.name}: {item.base_stat}
                                            </Typography>

                                            <LinearProgress
                                                variant="determinate"
                                                value={item.base_stat}
                                                sx={{
                                                    width: 400,
                                                    height: 10,
                                                    mr: 2,
                                                    background: '#eeeeee'
                                                }}

                                            />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                            <Typography
                                variant="h4"
                                sx={{
                                    textAlign: 'center',
                                }}
                                className=""
                            >
                                Attacks
                            </Typography>
                            <Grid container flexDirection='row' className=''>
                                {list?.moves?.map((item) => {
                                    return (
                                        <Grid
                                            item
                                            key={item.move.name}
                                            sx={{
                                                p: 1,
                                                m: 1,
                                                bgcolor: 'background.paper',
                                                borderRadius: 1,
                                            }}

                                            className=''
                                        >
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: '#004953'
                                                }}
                                            >
                                                {item.move.name}
                                            </Button>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </>
    )
}

export default PokemonsDetails