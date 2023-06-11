import React, {useState} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';


const Form =()=>{
    const [postData, setPostData] = useState({
        creator:'', title:'', message:'', tags:'', selectedFile:''});
    const classes = useStyles();

        const handleSubmit = () => {

        }



    return (
        <Paper className={classes.paper}>
        <form autoComplete='off' noValidate className='classes.form' onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating a Memory</Typography>
        <TextField  name='creator' varient="outlined"  label="Creator" fullWidth  value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})}/>
        <TextField  name='title' varient="outlined"  label="Title" fullWidth  value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}/>
        <TextField  name='message' varient="outlined"  label="Message" fullWidth  value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}/>
        <TextField  name='tags' varient="outlined"  label="Tags" fullWidth  value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value})}/>
        
        </form>
        </Paper>





    );
}

export default Form;