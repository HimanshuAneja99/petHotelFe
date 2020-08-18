import React , {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";
import Container from '@material-ui/core/Container';
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from 'axios';


const styles  = {
  form: {
    textAlign: "center",
  },
  image: {
    margin: "20px auto 20px auto",
    height: "100px",
  },
  pageTitle: {
    margin: "10px auto 10px auto",
  },
  textField: {
    margin: "10px auto 10px auto",
  },
  button: {
    marginTop: 20,
    position: "relative",
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  progress: {
    position: "absolute",
  },
  invisibleSeparator: {
    border: "none",
    margin: 4,
  },
  visibleSeparator: {
    width: "100%",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    marginBottom: 20,
  },
  paper: {
    padding: 20,
  },
}

class signup extends Component {
  
  constructor(){
    super();
    this.state = {
      email : '',
      name : '',
      password : '',
      confirmPassword :'',
      handle : '',
      body : '',
      phone :'',
      loading : false,
      errors : {}
    }
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name] : event.target.value
    })

  }
  handleSubmit = (event) =>{
      event.preventDefault()
      this.setState({
        loading : true
      })
      const newUserData = {
        name : this.state.name,
        email : this.state.email,
        password : this.state.password,
        confirmPassword : this.state.confirmPassword,
        handle : this.state.handle,
        phone : this.state.phone,
        body : this.state.body
      }
      axios.post('http://localhost:5000/pethotel-e7d26/us-central1/api/host/signup',newUserData)
      .then((res)=>{
        localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
          console.log(res.data)
          this.setState({
            loading:false
          })
          this.props.history.push('/')
      })
      .catch((err)=>{
          console.log(err.response.data)
        this.setState({
          errors : err.response.data,
          loading: false
        })
      })
  }


render(){
  const {classes} = this.props;
  const {errors,loading} = this.state; 
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h2" className={classes.pageTitle}>
            Signup
          </Typography>
        <form className={classes.form} noValidate onSubmit = {this.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                value = {this.state.name}
                onChange = {this.handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="handle"
                label="Username"
                name="handle"
                helperText = {errors.handle}
                error = {errors.handle ? true : false}
                value = {this.state.handle}
                onChange = {this.handleChange}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText = {errors.email}
                error = {errors.email ? true: false }
                autoFocus
                value = {this.state.email}
                onChange = {this.handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                multiline
                fullWidth
                rows={2}
                id="body"
                label="body"
                name="body"
                autoComplete="body"
                value = {this.state.body}
                onChange = {this.handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
                value = {this.state.phone}
                onChange = {this.handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                helperText = {errors.password}
                error = {errors.password ? true: false }
                autoFocus
                value = {this.state.password}
                onChange = {this.handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                helperText = {errors.confirmPassword}
                error = {errors.password ? true: false }
                autoFocus
                value = {this.state.confirmPassword}
                onChange = {this.handleChange}
              />
            </Grid>
            
          </Grid>
          {errors && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
            disabled = {loading}
          >
            Sign Up
            {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>
  );
}
}
export default withStyles(styles)(signup);