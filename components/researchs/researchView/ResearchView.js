import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
            <Grid item xs={false} sm={4} md={7} className={classes.image} style={{ backgroundImage: `url(${post.coverPage})` }} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography style={{ marginBottom: "20px" }} component="h5" variant="h5">
                        {post.title}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginBottom: "10px" }} component="h5" variant="h6">
                        Session ID : {post._id}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginBottom: "10px" }} component="h5" variant="h6">
                        Research Name: {post.title}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginBottom: "10px" }} component="h5" variant="h6">
                        Description: {post.description}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginBottom: "10px" }} component="h5" variant="h6">
                        Researcher Contact Email: {post.contactInfo.email}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginBottom: "10px" }} component="h5" variant="h6">
                        Researcher Contact Number: {post.phoneNo}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginBottom: "10px" }} component="h5" variant="h6">
                        Research Tags: {post.tag}
                    </Typography>
                    <Typography className="btn btn-light" style={{ fontSize: "15px", marginBottom: "10px" }} value component="a" href={post.document} variant="h6">
                        Document View
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
}