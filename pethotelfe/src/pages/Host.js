import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DisplayHost from '../component/DisplayHost'
import { withStyles } from "@material-ui/core/styles";
import Slider from '@material-ui/core/Slider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';


const styles = theme => ({
    grow: {
      flexGrow: 1,
    },
    form: {
        width: '100%', 
        marginTop: theme.spacing(3),
    },
    field: {
        marginLeft: theme.spacing(4)
    }
  });

export class Host extends Component {

    state = {
        hosts : null,
        searchNodes: ""
    }
    

   componentDidMount(){
            axios.get('http://localhost:5000/pethotel-e7d26/us-central1/api/host')
            .then((res)=>{
                console.log(res.data)
                this.setState({
                    hosts : res.data
                });
            })
            .catch((err)=>{
                console.log(err);
            })
   } 

   


    render() {
        const { classes } = this.props;
        const mystyle = {
            margin: "40px"
        };
        
        const btn = {
            margin: "10px"
        }
        let hosts = this.state.hosts ? (this.state.hosts.map((host,i)=>{
              return  <DisplayHost  key={i} host={host}/>
        })) : (<p>LOADING ....</p>);
        return (
            <div>
            <div>
            <form className = {classes.form} noValidate autoComplete="off">          
                <TextField style={mystyle} id="filled-basic" label="Location" variant="filled" />
                <TextField style={mystyle} id="filled-basic" label="Start Date" variant="filled" />
                <TextField style={mystyle} id="filled-basic" label="End Date" variant="filled" />
                <div>
                <Button variant="contained" color="primary" >
                    Find a Host
                </Button>
                </div>
            </form>
            <hr style={{marginBottom:'50px', color:'#ddd'}} />

            <div>
                <Button style={btn} variant="outlined" color="primary">
                    Sort By
                </Button>

                <Button style={btn} variant="outlined" color="primary">
                   Filter   
                </Button>
            </div>

            <div style={{border: "#ddd 1px solid", margin: "20px", padding: "20px"}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <h4>Pet Type Accepted</h4>
                        
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h4>Price</h4>
                        <Slider valueLabelDisplay="auto" aria-labelledby="range-slider"/>
                        <Grid item sm={12}>From <TextField id="standard-basic" label="Rs. 450" /></Grid>
                        <Grid item sm={12}>Upto <TextField id="standard-basic" label="Rs. 950" /></Grid>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h4>More Filters </h4>
                        <FormControlLabel
                          control={
                           <Checkbox
                         // checked={state.checkedB}
                         // onChange={handleChange}
                          name="checkedB"
                          color="primary"
                           />
                        }
                        label="Show Verified Hosts Only"
                        />

                        <FormControlLabel
                          control={
                           <Checkbox
                         // checked={state.checkedB}
                         // onChange={handleChange}
                          name="checkedB"
                          color="primary"
                           />
                        }
                        label="Show Hosts Without Pets"
                        />

                        <FormControlLabel
                          control={
                           <Checkbox
                         // checked={state.checkedB}
                         // onChange={handleChange}
                          name="checkedB"
                          color="primary"
                           />
                        }
                        label="Having Open Play Area"
                        />

                        <FormControlLabel
                          control={
                           <Checkbox
                         // checked={state.checkedB}
                         // onChange={handleChange}
                          name="checkedB"
                          color="primary"
                           />
                        }
                        label="Show Professional Trainers"
                        />

                        <FormControlLabel
                          control={
                           <Checkbox
                         // checked={state.checkedB}
                         // onChange={handleChange}
                          name="checkedB"
                          color="primary"
                           />
                        }
                        label="Show Pet Hotels Only"
                        />

                    </Grid>
                </Grid>
            </div>
            </div>
            

             {hosts}
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Host)