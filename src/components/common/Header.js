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


// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import {IndexLink,Link} from "react-router";

// const styles = {
//     root: {
//       flexGrow: 1,
//     },
//     grow: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginLeft: -12,
//       marginRight: 20,
//     },
//   };
  

// class ButtonAppBar extends React.Component{

//      render(){
//         const { classes } = this.props;

//         return(
//             <div className={classes.root}>
//             <AppBar position="static">
//               <Toolbar>
//                 <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//                   <MenuIcon />
//                 </IconButton>
//                 <Typography variant="h6" color="inherit" className={classes.grow}>
//                   News
//                 </Typography>
//                 <IndexLink to="/" className="links home" activeClassName="act">Home</IndexLink>
//                 <Link to="/about" className="links about" activeClassName="act">About</Link>

//                 <Button color="inherit">Login</Button>
//               </Toolbar>
//             </AppBar>
//           </div>
      
//         );
//     }
// }


// export default withStyles(styles)(ButtonAppBar);
