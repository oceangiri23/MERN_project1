import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import getPosts from './actions/posts.js';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Forms from './components/Forms/Form.js';
import useStyles from './styles';

const App =() => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);

    return(
       <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} varient="h2" align="center">Memories</Typography>
             <img className={classes.image} src={memories} alt="memories" height="60" /> 
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify-content="space-between" alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Forms/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
       </Container>
    );
}

export default App; 