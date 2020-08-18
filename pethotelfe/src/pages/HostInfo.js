import React, {Component} from 'react'
import HostImages from '../component/HostImages'

export default class HostInfo extends Component{
    render(){
        return(
            <div>
                <h1>Host info</h1>
                <HostImages/>
            </div>
        )
    }
}