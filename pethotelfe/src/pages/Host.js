import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import DisplayHost from '../component/DisplayHost'
export class Host extends Component {

    state = {
        hosts : null
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
        let hosts = this.state.hosts ? (this.state.hosts.map((host,i)=>{
              return  <DisplayHost  key={i} host={host}/>
        })) : (<p>LOADING ....</p>);
        return (
            <div>
             {hosts}
            </div>
        )
    }
}

export default Host