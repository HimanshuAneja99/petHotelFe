import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid';
import HostAbout from '../component/HostAbout';
import HostPrice from '../component/HostPrice';
import HostImages from '../component/HostImages';
import HostServices from '../component/HostServices'
export default class HostInfo extends Component{
    render(){
        return(
            <div>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <HostImages/>
                    </Grid>
                    <Grid item xs={7}>
                        <HostAbout/>
                        <HostServices/>
                    </Grid>
                    <Grid item xs={5}>
                        <HostPrice/>
                    </Grid>
                </Grid>
                
                
            </div>
        )
    }
}