import React, { Component } from "react";
import {Link} from "react-router-dom";
// material
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import Container from'@material-ui/core/Container'
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
const styles = {
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

class login extends Component {

  constructor(){
    super();
    this.state = {
      email : '',
      password : '',
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
      const userData = {
        email : this.state.email,
        password : this.state.password
      }
      axios.post('http://localhost:5000/pethotel-e7d26/us-central1/api/host/login',userData)
      .then((res)=>{
          console.log(res.data)
          localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
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
      const {errors,loading} = this.state
      const {classes} = this.props
   return(

   
   
      <div className={classes.paper}>
      <Container component="main" maxWidth="xs">
  <div className={classes.paper}>
    
    <Typography component="h1" variant="h5">
      Sign in
    </Typography>
    <form className={classes.form} noValidate onSubmit = {this.handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
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
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        helperText = {errors.password}
        error = {errors.password ? true: false }
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value = {this.state.password}
        onChange = {this.handleChange}
      />
       {errors.general && (
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
        disabled={loading}
      >
        Sign In
        {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="/signup" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
  </div>
 
</Container>
      </div>
    

   )
  }
  }

export default withStyles(styles)(login);