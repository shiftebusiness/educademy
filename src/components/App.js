import React from "react";
import Header from "./common/Header.js";
import PropTypes from 'prop-types';

class App extends React.Component{

     render(){
        return(
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children : PropTypes.object.isRequired
    
};

export default App;