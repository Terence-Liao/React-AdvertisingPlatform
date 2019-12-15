import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '50px',
        'align-items': 'center'
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    spacing: 8
}));

export default function MenuListComposition() {
    const classes = useStyles();
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const anchorRef1 = React.useRef(null);
    const anchorRef2 = React.useRef(null);
    const anchorRef3 = React.useRef(null);


    const handleToggle1 = () => {
        setOpen1(prevOpen1 => !prevOpen1);
    };
    const handleToggle2 = () => {
        setOpen2(prevOpen2 => !prevOpen2);
    };
    const handleToggle3 = () => {
        setOpen3(prevOpen3 => !prevOpen3);
    };



    const handleClose1 = event => {
        if (anchorRef1.current && anchorRef1.current.contains(event.target)) {
            return;
        }

        setOpen1(false);
    };
    const handleClose2 = event => {
        if (anchorRef2.current && anchorRef2.current.contains(event.target)) {
            return;
        }

        setOpen2(false);
    };
    const handleClose3 = event => {
        if (anchorRef3.current && anchorRef3.current.contains(event.target)) {
            return;
        }

        setOpen3(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen1 = React.useRef(open1);
    const prevOpen2 = React.useRef(open2);
    const prevOpen3 = React.useRef(open3);
    /*React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);*/

    return (
        <div className='sameColor'>
            <Container className={classes.root}>
                <Box mr={1} component='div'>
                    <Button variant="contained" color="primary" className='sameColor'>
                        首页
                    </Button>
                </Box>
                <Box component='div' mr={1}>
                    <Button
                        ref={anchorRef1}
                        aria-haspopup="true"
                        onClick={handleToggle1}
                        variant="contained" color="primary" className='sameColor '
                    >
                        媒体分类
                    </Button>
                    <Popper open={open1}  role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose1}>
                                        <MenuList  id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={handleClose1}>全部</MenuItem>
                                            <MenuItem onClick={handleClose1}>百叶窗广告道闸</MenuItem>
                                            <MenuItem onClick={handleClose1}>LCD视频广告道闸</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Box>
                <Box component='div' mr={1}>
                    <Button
                        ref={anchorRef2}
                        aria-controls={open2 ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        variant="contained" color="primary" className='sameColor'
                        onClick={handleToggle2}
                    >
                        Toggle Menu Grow
                    </Button>
                    <Popper open={open2}  role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose2}>
                                        <MenuList  id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={handleClose2}>Profile2</MenuItem>
                                            <MenuItem onClick={handleClose2}>My account</MenuItem>
                                            <MenuItem onClick={handleClose2}>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Box>
                <Box component='div' mr={1}>
                    <Button
                        ref={anchorRef3}
                        aria-controls={open3 ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        variant="contained" color="primary" className='sameColor'
                        onClick={handleToggle3}
                    >
                        Toggle Menu Grow
                    </Button>
                    <Popper open={open3}  role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose3}>
                                        <MenuList  id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={handleClose3}>Profile3</MenuItem>
                                            <MenuItem onClick={handleClose3}>My account</MenuItem>
                                            <MenuItem onClick={handleClose3}>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Box>
            </Container>
        </div>
    );
}