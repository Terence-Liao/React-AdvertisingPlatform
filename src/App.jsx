import React from 'react';
import { CssBaseline } from "@material-ui/core";
import TopBar from './component/TopBar.jsx'
import MidBar from './component/MidBar.jsx'
import NavBar from './component/comNav.jsx'
import Carousel from  './component/comCarousel.jsx'
class App extends React.Component {
    render() {
        return(
        <React.Fragment>
            <CssBaseline />
            <TopBar />
            <MidBar />
            <NavBar />
            <Carousel  />
        </React.Fragment>)
    }
}

export default App;