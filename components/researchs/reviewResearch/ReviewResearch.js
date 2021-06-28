import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CookieService from '../../../API/Cookie'
import { getAllResearchs, approveResearches } from '../../../actions/researchActions';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ResearchView from '../researchView/ResearchView'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
    const [open, setOpen] = useState(false);
    const [selectedRow, setRow] = useState()

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

    const approveResearch = (key) => {
        console.log('requested ' + key);
        dispatch(approveResearches(key))
    }

    const ignoreResearch = () => {
        console.log('ignore');
    }


    const handleClickOpen = (row) => {
        console.log(row);
        setRow(row)
        setOpen(true);
    };

    const handleClose = () => {
        console.log("clicked");
        setOpen(false);
        console.log(open);
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
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
                                    <TableCell style={{ width: "200px" }}>Research Name</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Tag</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell style={{ width: "300px" }} align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {researchs && researchs.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell align="center" >{row.title}</TableCell>
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
                                            <div className={classes.input}>
                                                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                                                    <AppBar className={classes.appBar}>
                                                        <Toolbar>
                                                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                                                <CloseIcon />
                                                            </IconButton>
                                                            <Typography variant="h6" className={classes.title}>
                                                                {row.sessionName}
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
                                                onClick={() => handleClickOpen(row)}
                                                className={classes.button}
                                                startIcon={<VisibilityIcon />}
                                            >
                                                View
                                            </Button>
                                            {row.isApproved == 0 ?
                                                <Button
                                                    variant="contained"
                                                    style={{ marginLeft: "5px", background: "#4caf50", color: "#fffff0" }}
                                                    size="small"
                                                    className={classes.button}
                                                    onClick={() => approveResearch(row._id)}
                                                    startIcon={< CheckCircleIcon />}
                                                >
                                                    Approve
                                                </Button>
                                                :
                                                null}

                                            {row.isApproved == 1 ?
                                                <Button
                                                    variant="contained"
                                                    style={{ marginLeft: "5px", background: "#f44336", color: "#fffff0" }}
                                                    size="small"
                                                    className={classes.button}
                                                    onClick={() => ignoreResearch(row._id)}
                                                    startIcon={<RemoveCircleIcon />}
                                                >
                                                    Remove
                                                </Button>
                                                :
                                                null}

                                            {row.isApproved == 2 ?
                                                <Button
                                                    variant="contained"
                                                    style={{ marginLeft: "5px", background: "#4caf50", color: "#fffff0" }}
                                                    size="small"
                                                    className={classes.button}
                                                    onClick={() => approveResearch(row._id)}
                                                    startIcon={< CheckCircleIcon />}
                                                >
                                                    Approve
                                                </Button>
                                                :
                                                null}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </main>
        </div >
    );
}

export default AdminResearch;