import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignInSide(props) {
    const classes = useStyles();
    const { post } = props;

    console.log(props);

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} style={{ backgroundImage: `url(${post.flyer})` }} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography style={{ marginBottom: "20px" }} component="h5" variant="h5">
                        {post.sessionName}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginBottom: "10px" }} component="h5" variant="h6">
                        Session ID : {post._id}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginBottom: "10px" }} component="h5" variant="h6">
                        Session Name: {post.sessionName}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginBottom: "10px" }} component="h5" variant="h6">
                        Prasenter Name: {post.researcherName}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginBottom: "10px" }} component="h5" variant="h6">
                        Prasenter Name: {post.email}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginBottom: "10px" }} component="h5" variant="h6">
                        Prapose Date: {post.praposeDate}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginBottom: "10px" }} component="h5" variant="h6">
                        Prapose Date: {post.date}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginBottom: "10px" }} component="h5" variant="h6">
                        Venue: {post.venue}
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
}