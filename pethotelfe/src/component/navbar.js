import React from "react";
import Link from "react-router-dom/Link";
// material
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
      <AppBar position="fixed">
        <Toolbar className="nav-container">
        <Typography classname={classes.title} variant="h4" noWrap>
            PetHotel
          </Typography>
        <Button color="inherit" className={classes.navlink} component={Link} to="/host">
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
              <Button variant="outlined" color="inherit" type="button" onClick={handleOpen} >
                     Login
              </Button>
          </div>

          <div className={classes.authlink}>
              <Button variant="contained" color="primary" style={{backgroundColor: '#fff', color: '#3f51b5'}} component={Link} to="/signup">
                    Sign Up
              </Button>
          </div>
        </Toolbar>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
          </div>
        </Fade>
      </Modal>
      </AppBar>
    );
  }

