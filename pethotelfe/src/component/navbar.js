import React, { Component } from "react";
import Link from "react-router-dom/Link";
// material
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
export class navbar extends Component {
  render() {
    return (
      <AppBar position="fixed">
        <Toolbar className="nav-container">
        <Button color="inherit" component={Link} to="/">
            Booking 
          </Button>
          <Button color="inherit" component={Link} to="/">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/">
            Blog 
          </Button>
          <Button color="inherit" component={Link} to="/">
            How it works
          </Button>
          <Button color="inherit" component={Link} to="/login">
            LogIn
          </Button>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="signUp">
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default navbar;
