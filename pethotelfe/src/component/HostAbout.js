import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default class HostAbout extends Component{
    render(){
        return(
            <div style={{width: '636px',height: '383px',left: '72px',top: '624px'}}>
                <h3>About Manan's Home</h3>
                <p>I live in a 3 BHK apartment with 3 balconies (one of those is a designated pooping area for my doggo). There is enough space in the apartment complex for dogs to walk and play around as well. </p>

                <Grid container>
                    <Grid item xs={6}>
                        <b>Location</b>
                    </Grid>
                    <Grid item xs={6}>
                        Pitampura, Delhi
                    </Grid>
                    <hr style={{color:'black', backgroundColor:'black'}}/>

                    <Grid item xs={6}>
                        <b>Accepted Pet Type</b>
                    </Grid>
                    <Grid item xs={6}>
                        Dogs
                    </Grid>

                    <Grid item xs={6}>
                        <b>Maximum Pet Capacity</b>
                    </Grid>
                    <Grid item xs={6}>
                        2
                    </Grid>

                    <Grid item xs={6}>
                        <b>Home Type </b>
                    </Grid>
                    <Grid item xs={6}>
                        Apartment
                    </Grid>

                    <Grid item xs={6}>
                        <b>Availability </b>
                    </Grid>
                    <Grid item xs={6}>
                        Weekends
                    </Grid>
                </Grid>
            </div>
        )
    }
}