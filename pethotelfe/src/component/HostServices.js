import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default class HostServices extends Component{
    render(){
        return(
            <div>
                <h3>Services Provided</h3>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <div style={{width: '160px',height: '120px',left: '72px',top: '1092px',background: 'rgba(229, 237, 235, 0.5)',
                        borderRadius: '20px', padding:'10px'}}>
                            
                            <Grid container>
                                <Grid item xs={12}>
                                    <img src={require('../images/Vector1.png')}/>
                                </Grid>

                                <Grid item xs={12}>
                                    2 Walks a Day
                                </Grid>
                            </Grid>                           
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}