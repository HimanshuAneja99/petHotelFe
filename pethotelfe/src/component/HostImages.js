import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid';


export default class HostImages extends Component{
    render(){
        return(
            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <div style={{backgroundColor:'red',width: '636px',height: '400px',left: '72px',top: '152px',
                    borderRadius: '20px 0px 0px 20px'}}>
                        Image 1
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                         <div style={{backgroundColor:'blue',width: '314px',height: '192px',left: '724px',top: '152px'}}>
                            Image 2
                         </div>
                        </Grid>
                        <Grid item xs={6}>
                         <div style={{backgroundColor:'green',width: '314px',height: '192px',left: '1054',top: '152px',
                        borderRadius: '0px 20px 0px 0px'}}>
                            Image 3
                         </div>
                        </Grid>
                        <Grid item xs={6}>
                         <div style={{backgroundColor:'green',width: '314px',height: '192px',left: '724px',top: '152px'}}>
                            Image 4
                         </div>
                        </Grid>
                        <Grid item xs={6}>
                         <div style={{backgroundColor:'blue',width: '314px',height: '192px',left: '1054',top: '360px',
                        borderRadius: '0px 0px 20px 0px'}}>
                            Image 5
                         </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}