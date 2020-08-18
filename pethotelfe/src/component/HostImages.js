import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid';


export default class HostImages extends Component{
    render(){
        return(
            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <div style={{width: '636px',height: '400px',left: '72px',top: '152px',
                    borderRadius: '20px 0px 0px 20px'}}>
                        <img src={require('../images/host1.png')}/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                         <div style={{width: '314px',height: '192px',left: '724px',top: '152px'}}>
                         <img src={require('../images/host2.png')}/>
                         </div>
                        </Grid>
                        <Grid item xs={6}>
                         <div style={{width: '314px',height: '192px',left: '1054',top: '152px',
                        borderRadius: '0px 20px 0px 0px'}}>
                            <img src={require('../images/host3.png')}/>
                         </div>
                        </Grid>
                        <Grid item xs={6}>
                         <div style={{width: '314px',height: '192px',left: '724px',top: '152px'}}>
                         <img src={require('../images/host4.png')}/>
                         </div>
                        </Grid>
                        <Grid item xs={6}>
                         <div style={{width: '314px',height: '192px',left: '1054',top: '360px',
                        borderRadius: '0px 0px 20px 0px'}}>
                            <img src={require('../images/host5.png')}/>
                         </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}