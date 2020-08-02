import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";

export default class HostSearch extends Component{
    render(){
        const mystyle = {
            margin: "40px"
        };
        return(
            <form noValidate autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <TextField style={mystyle} id="filled-basic" label="Location" variant="filled" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField style={mystyle} id="filled-basic" label="Start Date" variant="filled" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField style={mystyle} id="filled-basic" label="End Date" variant="filled" />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <Button variant="contained" color="primary" >
                    Find a Host
                </Button>
                    </Grid>
                </Grid>     
            </form>
        )
    }
}