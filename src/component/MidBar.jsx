
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
class MidBar extends React.Component{
    render() {
        return(
            <Container>
                <Box>
                    <img src={require('../images/logo.png')} alt="" width='180'/>
                </Box>
            </Container>
        );
    }
}
export  default MidBar;