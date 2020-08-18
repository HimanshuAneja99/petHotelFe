import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './component/navbar'
import Footer from './component/footer'
import './App.css';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import AuthRoute from './util/AuthRoute'
import Home from "./pages/home";
import Host from "./pages/Host";
import signup from "./pages/signup"
import SignupHost from "./pages/signUpHost"
import HostInfo from "./pages/HostInfo"
import axios from 'axios';
import login from "./pages/login";
import jwtDecode from "jwt-decode";
// Modal Function

axios.defaults.baseUrl = "http://localhost:5000/pethotel-e7d26/us-central1/api";


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

let authenticated = false;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
          
            <div className="container">
            <Route exact path="/" component={Home} />
            <AuthRoute exact path="/login" component={login} authenticated={authenticated}/>
            <Route exact path="/host" component={Host}/>

            <Route exact path="/hostinfo" component={HostInfo}/>

            <AuthRoute exact path="/signup" component={signup} authenticated={authenticated}/>
            <AuthRoute exact path="/signuphost" component={SignupHost} authenticated={authenticated}/>

            
            </div>
                  
            <Footer />
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
