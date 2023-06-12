import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './style.js';

const Post =({ post })=>{
    const classes = useStyles();
    return (
       <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
        <div className={classes.overlay}>
            <Typography varient="h6">{post.creator}</Typography>
            <Typography varient="body2">{moment(post.createAt).fromNow()} </Typography>
        </div>
        <div className={classes.overlay2}>
            <Button style={{colour: 'white'}} size="small" onClick={()=>{}}>
                <MoreHorizIcon frontSize="default"/>
                </Button>
                </div>
                <div className={classes.default}>
                    <Typography varient="body2" color="textSecondary">{post.tags.map((tag)=>`#${tag}`)}</Typography>
                </div>
                <CardContent>
                <Typography className={classes.title} varient="h5" gutterBottom>{post.message}</Typography>
                </CardContent>

                <CardActions className={classes.cardActions} >
                    <Button size="small" colour="primary" onClick={()=>}>
                        <ThumbUpAltIcon frontSize="small" />
                        Like
                        {post.likeCount}
                    </Button>

                    <Button size="small" colour="primary" onClick={()=>}>
                        <DeleteIcon frontSize="small" />
                        Delete
                    </Button>
                </CardActions>

                

       </Card>
    );
}

export default Post;