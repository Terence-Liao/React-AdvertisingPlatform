import React from 'react';
import { CssBaseline } from "@material-ui/core";
import MenuAppBar from './component/TopBar.jsx'
import MidBar from './component/MidBar.jsx'


class App extends React.Component {
    render() {
        return(
        <React.Fragment>
            <CssBaseline />
            <MenuAppBar />
            <MidBar />
        </React.Fragment>)
    }
}

export default App;