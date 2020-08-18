import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

export default class HostPrice extends Component{
    render(){
        return(
            <div style={{width: '526px',height: '595px',left: '842px',top: '624px', border: '1px solid black',
            padding: '10px', boxShadow: '5px 5px 5px 5px #888888'}}>
                <h2>Manan Mathur</h2>
                <p>Hello, I'm an enthusiastic dog lover with a previous dog sitting experience in New York. Having always connected with dogs, their presence not only adds happiness but taking care of them provides extreme amounts of satisfaction and joy. Look forward to taking care of your dog and adding value to everybody in the equation. </p>

                <h4>Prices</h4>
                <Grid container>
                    <Grid item xs={6}>
                        <b>Small Dogs</b>
                    </Grid>
                    <Grid item xs={6}>
                        INR 600/Night
                    </Grid>
                    <hr style={{color:'black', backgroundColor:'black'}}/>

                    <Grid item xs={6}>
                        <b>Large Dogs</b>
                    </Grid>
                    <Grid item xs={6}>
                        INR 800/Night
                    </Grid>
                    
                </Grid>
                <Button variant="contained" color="primary" >
                     Contact Host</Button>
            </div>
        )
    }
}