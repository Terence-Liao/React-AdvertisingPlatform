
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { Router, Route, Link } from 'react-router'
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    localCss: {
        paddingLeft: 10,
        flex: '.8 0 auto',
    },
    insearCss:{
        flex: '2 0 auto'
    }
}));

export default function CustomizedInputBase() {
    const classes = useStyles();
    return (
        <Container className="pad-t30 pad-b70 icon-rig">
            <Box  component="a" className="pos-r pad-r10">
                <img src={require('../images/logo.png')} alt="" width='180'/>
                <div className="rg-line"></div>
            </Box>
            <Box className={classes.localCss}>
                <a className="eleMid">
                    <span className="pad-r5">深圳</span>
                    <i className="triangleBt"></i>
                </a>
            </Box>
            <Box className={ classes.insearCss }>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Please enter the information"
                        inputProps={{ 'aria-label': 'Please enter the information' }}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>
        </Container>
    );
}


