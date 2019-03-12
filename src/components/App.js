import React from "react";
import Header from "./common/Header.js";
import PropTypes from 'prop-types';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

class App extends React.Component{

     render(){
        return(
            <div id="root">
                {/* <MuiThemeProvider> */}
                    <Header/>
                    {this.props.children}
                {/* </MuiThemeProvider> */}
            </div>
        );
    }
}

App.propTypes = {
    children : PropTypes.object.isRequired
    
};

export default App;
