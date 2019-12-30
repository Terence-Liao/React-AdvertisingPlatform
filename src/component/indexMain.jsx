import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Container,
    Breadcrumbs,Link,Divider,Card,CardHeader,Avatar,
    CardContent,CardActions,CardMedia,List,ListItem,ListItemText,Button} from '@material-ui/core';
import { deepOrange, green } from '@material-ui/core/colors';
import { DirectionsCar,People,Pageview,ViewWeek,Room} from '@material-ui/icons';
import MediaImg from '@/images/js.png'



const useStyles = makeStyles(theme => ({
    root: {
        'max-width': '1200px',
        'padding': '15px'
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    cardWidth: {
      maxWidth: 345,
      margin: '20px 10px 10px'
    },
    spacing: 8,
    carAva:{
        color: '#fff',
        backgroundColor: green[500],
    },
    peopleAva:{
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));
const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'primary.main',
    m: 1,
    border: 1,
};


export default function AdverMain(){
    const classes = useStyles();
    return (
        <Box
            component='div'
            mt={5} mx="auto"
            className={classes.root}
            borderRadius="borderRadius"
            {...defaultProps}
            borderLeft={3}
        >
            <Container>

                <Box color='error.main'>
                    <Typography variant="h5" gutterBottom>
                        ·媒体资源·
                    </Typography>
                </Box>

                <Box display='flex' >

                   <Box ml={3} mr={1} >
                       <Typography variant="button" display="block" gutterBottom >
                           区域分布:
                       </Typography>
                   </Box>
                   <Breadcrumbs aria-label="breadcrumb">

                       <Link color="inherit">
                           Material-UI
                       </Link>
                       <Link color="inherit">
                           Core
                       </Link>
                       <Typography color="textPrimary">Breadcrumb</Typography>

                   </Breadcrumbs>

               </Box>

                <Divider />

                <Card className={classes.cardWidth} >

                        <Box display='flex' justifyContent="space-between" flexDirection="row-reverse">

                            <CardHeader
                                avatar={
                                    <Avatar aria-label="carFlow" className={classes.carAva}>
                                        <DirectionsCar />
                                    </Avatar>
                                }
                                title="车流量"
                                subheader="20199"
                            />

                            <CardHeader
                                avatar={
                                    <Avatar aria-label="peopleFlow" className={classes.peopleAva}>
                                        <People />
                                    </Avatar>
                                }
                                title="人流量"
                                subheader="20199"
                            />


                        </Box>

                        <CardMedia
                            className={classes.media}
                            image={MediaImg}
                            title="Paella dish"
                        />

                        <CardContent>

                            <List component="nav" aria-label="main mailbox folders">
                                <ListItem>
                                    <ListItemText>
                                        aaaa
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemText>
                                        bbbb
                                    </ListItemText>

                                </ListItem>
                                <Divider />
                            </List>
                        </CardContent>

                        <CardActions disableSpacing>
                           <Box className='icon-rig'>
                               <Button
                                   startIcon={<Pageview />}
                                   color="primary"
                               >
                                   监测
                               </Button>

                               <Button
                                   color="secondary"
                                   startIcon={<ViewWeek />}

                               >
                                   报表
                               </Button>


                               <Button
                                   color="primary"
                                   startIcon={<Room />}
                               >
                                   地图
                               </Button>

                           </Box>
                        </CardActions>

                </Card>

            </Container>

        </Box>
    );
}