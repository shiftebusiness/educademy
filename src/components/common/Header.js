import React from "react";
import {IndexLink,Link} from "react-router";

class Header extends React.Component{

     render(){
        return(
            <nav className="navbar navbar-dark bg-primary" id="navLinks">
                <IndexLink to="/" className="links home" activeClassName="act">Home</IndexLink>
                <Link to="/about" className="links about" activeClassName="act">About</Link>
            </nav>
        );
    }
}

export default Header;