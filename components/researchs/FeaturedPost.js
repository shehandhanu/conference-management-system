import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ReviewView from './researchView/ResearchView'

const useStyles = makeStyles({
  card: {
    display: 'flex',
    height: 200,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  appBar: {
    position: 'relative',
  },
  // title: {
  //   marginLeft: theme.spacing(2),
  //   flex: 1,
  // },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { post } = props;

  useEffect(() => {


  }, [open]);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("clicked");
    setOpen(false);
    setOpen(false);
    console.log(open);
  };

  return (
    <Grid item xs={12}>
      <CardActionArea onClick={handleClickOpen}>
        <div>
          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  {post.title}
                </Typography>
              </Toolbar>
            </AppBar>
            <ReviewView post={post && post} />
          </Dialog>
        </div>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.tag} {post.venue}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Uploaded Date {post.uploadDate}
              </Typography>
              <Typography style={{ fontSize: "10px" }} variant="subtitle1">
                Approved Date {post.approvedDate}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.coverPage} title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
