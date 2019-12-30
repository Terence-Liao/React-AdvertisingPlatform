import React from 'react';
import { CssBaseline } from "@material-ui/core";
import TopBar from 'components/TopBar.jsx'
import MidBar from 'components/MidBar.jsx'
import NavBar from 'components/comNav.jsx'
import Carousel from  'components/comCarousel.jsx'
import ComMain from 'components/indexMain.jsx'
class App extends React.Component {
    render() {
        return(
        <React.Fragment>
            <CssBaseline />
            <TopBar />
            <MidBar />
            <NavBar />
            <Carousel  />
            <ComMain />
        </React.Fragment>)
    }
}

export default App;