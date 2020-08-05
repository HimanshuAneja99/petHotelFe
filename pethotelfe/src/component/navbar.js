import React from "react";
import Link from "react-router-dom/Link";
// material
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//modal

const useStyles = makeStyles((theme) => ({
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
  paper: {
    backgroundColor: theme.palette.background.paper,
    
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));





export default function Navbar() {
    const classes = useStyles();
    
    const [open, setOpen] = React.useState(false);

    return (
      <AppBar position="fixed">
        <Toolbar className="nav-container">
        <Typography classname={classes.title} variant="h4" noWrap>
            PetHotel
          </Typography>
        <Button color="inherit" className={classes.navlink} component={Link} to="/host">
           HOST
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
              <Button variant="outlined" color="inherit" type="button" component={Link} to="/login" >
                     Login
              </Button>
          </div>

          <div className={classes.authlink}>
              <Button variant="contained" color="primary" style={{backgroundColor: '#fff', color: '#3f51b5'}} component={Link} to="/signup">
                    Sign Up
              </Button>
          </div>
        </Toolbar>
      
      </AppBar>
    );
  }

