import React, { Component } from "react";
import Link from "react-router-dom/Link";
// material
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core";


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
  }
});





export class navbar extends Component {
  state = {
    searchNodes: ""
  };
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed">
        <Toolbar className="nav-container">
        <Typography classname={classes.title} variant="h4" noWrap>
            PetHotel
          </Typography>
        <Button color="inherit" className={classes.navlink} component={Link} to="/">
            Booking 
          </Button>
          <Button color="inherit" className={classes.navlink} component={Link} to="/">
            About Us
          </Button>
          <Button color="inherit" className={classes.navlink} component={Link} to="/">
            Blog 
          </Button>
          <Button color="inherit" className={classes.navlink} component={Link} to="/">
            How it works
          </Button>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

          </div>
          <div className={classes.authlink}>
              <Button variant="outlined" color="inherit" type="button" >
                     Login
              </Button>
          </div>

          <div className={classes.authlink}>
              <Button variant="contained" color="primary" style={{backgroundColor: '#fff', color: '#3f51b5'}}>
                    Sign Up
              </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(navbar);
