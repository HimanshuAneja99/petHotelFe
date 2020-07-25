import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './component/navbar'
import FooterPage from './component/footer'
import './App.css';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import Home from "./pages/home";
import Host from "./pages/Host";
import Signup from "./pages/signup"
import SignupHost from "./pages/signUpHost"


// Modal Function

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

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
          
            <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/host" component={Host}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/signuphost" component={SignupHost}/>

            
            </div>
                  
            <FooterPage />
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
