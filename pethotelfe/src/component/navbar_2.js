import React, { Component } from "react";
import Link from "react-router-dom/Link";
// material
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  navlink: {
    position: 'relative',
    marginLeft: theme.spacing(3)    
  },
  authlink: {
    position: 'relative',
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(0.5)
  },
  title: {
    display: 'none',
    marginRight: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    padding: '5px'
  }
});





export class Navbar extends Component {
  state = {
    searchNodes: ""
  };

  
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" style={{color: '#000', backgroundColor:'#fff'}}> 
        <Toolbar className="nav-container">
          <div className={classes.logo}>
            <img src={require('../images/logo.png')}/>
          </div>
        
        <Button color="inherit" className={classes.navlink} component={Link} to="/host">
            Host 
          </Button>
          <Button color="inherit" className={classes.navlink} component={Link} to="/aboutus">
            About Us
          </Button>
          <Button color="inherit" className={classes.navlink} component={Link} to="/blog">
            Blog 
          </Button>
          <Button color="inherit" className={classes.navlink} component={Link} to="/howitworks">
            How it works
          </Button>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

          </div>
          <div className={classes.authlink}>
              <Button variant="outlined" color="inherit" type="button" component={Link} to="/login">
                     Login
              </Button>
          </div>

          <div className={classes.authlink}>
              <Button variant="contained" color="primary" style={{color: '#fff', backgroundColor: 'primary'}} component={Link} to="/signup">
                    Sign Up
              </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navbar);
