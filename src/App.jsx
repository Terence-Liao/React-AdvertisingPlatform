import React from 'react';
import { CssBaseline } from "@material-ui/core";
import MenuAppBar from  './component/topBar.jsx'
class App extends React.Component {
    render() {
        return(
        <React.Fragment>
            <CssBaseline />
            <MenuAppBar />
            hello!React
        </React.Fragment>)
    }
}

export default App;