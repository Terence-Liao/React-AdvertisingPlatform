import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import PopupState, { bindTrigger, bindPopover,bindMenu } from 'material-ui-popup-state';


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

        prevOpen.current = open;anchorEl
    }, [open]);*/

    return (
        <div className='sameColor'>
            <Container className={classes.root}>

                <Box mr={1.5} component='div'>
                    <React.Fragment >
                        <Button   className='btnCom'>
                            首页
                        </Button>
                    </React.Fragment>
                </Box>
                <Box mr={1.5} component='div'>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {popupState => (
                            <React.Fragment>
                                <Button  color="primary" {...bindTrigger(popupState)} className='btnCom'>
                                    区域分类
                                </Button>
                                <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <MenuList >
                                        <MenuItem onClick={popupState.close}>全部</MenuItem>
                                        <MenuItem onClick={popupState.close}>百叶窗广告道闸</MenuItem>
                                    </MenuList>
                                </Popover>
                            </React.Fragment>
                        )}
                    </PopupState>
                </Box>
                <Box mr={1.5} component='div'>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {popupState => (
                            <React.Fragment>
                                <Button  {...bindTrigger(popupState)} className='btnCom'>
                                    媒体分类
                                </Button>
                                <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <MenuList >
                                        <MenuItem onClick={popupState.close}>全部</MenuItem>
                                        <MenuItem onClick={popupState.close}>百叶窗广告道闸</MenuItem>
                                    </MenuList>
                                </Popover>
                            </React.Fragment>
                        )}
                    </PopupState>
                </Box>
                <Box mr={1.5} component='div'>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {popupState => (
                            <React.Fragment>
                                <Button   {...bindTrigger(popupState)} className='btnCom'>
                                    媒体状态
                                </Button>
                                <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <MenuList >
                                        <MenuItem onClick={popupState.close}>全部</MenuItem>
                                        <MenuItem onClick={popupState.close}>百叶窗广告道闸</MenuItem>
                                    </MenuList>
                                </Popover>
                            </React.Fragment>
                        )}
                    </PopupState>
                </Box>

            </Container>
        </div>
    );
}