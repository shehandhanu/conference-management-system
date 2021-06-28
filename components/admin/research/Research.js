import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SwitchVideoIcon from '@material-ui/icons/SwitchVideo';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PeopleIcon from '@material-ui/icons/People';
import AttachmentIcon from '@material-ui/icons/Attachment';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CookieService from '../../../API/Cookie'
import { getAllResearchs } from '../../../actions/researchActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ResearchView from '../../researchs/researchView/ResearchView'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        marginTop: 65,
        position: 'inherit',
        whiteSpace: 'nowrap',
        width: drawerWidth,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    table: {
        minWidth: 650,
    },
}));

const AdminResearch = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const { loading, researchs, error } = useSelector(state => state.research);

    useEffect(() => {

        const token = CookieService.get()
        if (!token) {
            history.push(redirect)
        }
        dispatch(getAllResearchs());

    }, [history, redirect, open]);

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    return (
        <div className={classes.root}>
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div>
                    <ListSubheader inset>Actions</ListSubheader>
                    <Link to={'/admin'} style={{ textDecoration: "none", color: "#00000f" }}>
                        <ListItem button>
                            <ListItemIcon><DashboardIcon /></ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </Link>
                    <Link to={'/admin/sessions'} style={{ textDecoration: "none", color: "#00000f" }}>
                        <ListItem button>
                            <ListItemIcon>
                                <SwitchVideoIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sessions" />
                        </ListItem>
                    </Link>
                    <Link to={'/admin/research'} style={{ textDecoration: "none", color: "#00000f" }}>
                        <ListItem button>
                            <ListItemIcon>
                                <InsertDriveFileIcon />
                            </ListItemIcon>
                            <ListItemText primary="Research Papers" />
                        </ListItem>
                    </Link>
                    <Link to={'/admin/users'} style={{ textDecoration: "none", color: "#00000f" }}>
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItem>
                    </Link>
                </div>
                <Divider />
                <div>
                    <ListSubheader inset>Sub Actions</ListSubheader>
                    <Link to={'/templates'} style={{ textDecoration: "none", color: "#00000f" }}>
                        <ListItem button>
                            <ListItemIcon>
                                <AttachmentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Template Files" />
                        </ListItem>
                    </Link>
                </div>
            </Drawer>
            <div className={classes.root}>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <TableContainer component={Paper}>
                            <Typography component="h1" className={classes.title} variant="h4" align="center">
                                All Research Documents
                            </Typography>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Session Name</TableCell>
                                        <TableCell align="center">Status</TableCell>
                                        <TableCell align="centerright">Researcher Name</TableCell>
                                        <TableCell align="center">Description</TableCell>
                                        <TableCell align="center"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {researchs && researchs.map((row) => (
                                        <TableRow key={row._id}>
                                            <TableCell component="th" scope="row">{row.title}</TableCell>
                                            <TableCell align="left">
                                                {row.isApproved == 0 ?
                                                    <div className="badge bg-warning text-wrap">
                                                        Pending
                                                    </div>
                                                    :
                                                    null}

                                                {row.isApproved == 1 ?
                                                    <div className="badge bg-primary text-wrap">
                                                        Approved
                                                    </div>
                                                    :
                                                    null}

                                                {row.isApproved == 2 ?
                                                    <div className="badge bg-danger text-wrap">
                                                        Rejected
                                                    </div>
                                                    :
                                                    null}
                                            </TableCell>
                                            <TableCell align="left">{row.tag}</TableCell>
                                            <TableCell align="left">{row.description}</TableCell>
                                            <TableCell align="left">
                                                <div>
                                                    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                                                        <AppBar className={classes.appBar}>
                                                            <Toolbar>
                                                                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                                                    <CloseIcon />
                                                                </IconButton>
                                                                <Typography variant="h6" className={classes.title}>
                                                                    {row.title}
                                                                </Typography>
                                                            </Toolbar>
                                                        </AppBar>
                                                        <ResearchView post={row} />
                                                    </Dialog>
                                                </div>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    onClick={handleClickOpen}
                                                    className={classes.button}
                                                    startIcon={<VisibilityIcon />}
                                                >
                                                    View
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                </main>
            </div >
        </div>
    );
}

export default AdminResearch;