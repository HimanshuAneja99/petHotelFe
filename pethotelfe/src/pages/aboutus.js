import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import  img  from "./img_avatar.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign:'left',
  },
  paper: {
    //padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text,
  },
  img:{
    width:'200px',
    borderRadius: '50%',
    margin: '15px',
  },
  h1:{
    margin:"20px",
    padding:"20px",
    fontStyle:"italic",
  },
  p:{
    textAlign:"left",
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <div className='container' >
      <div className='container' textAlign="left">
        <h1 className="text-center" className={classes.h1}>Our Story</h1>
        <p className={classes.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in consequat metus. Donec viverra, risus consequat aliquet iaculis, erat tortor vehicula metus, nec faucibus nisi velit vitae justo. Cras blandit quis purus sed semper. Ut feugiat lacus non enim semper, eu dapibus mauris viverra. Nunc lectus leo, facilisis id aliquet ac, rutrum tempus augue. Sed ac tellus ac leo lacinia convallis. Quisque in diam arcu.

Morbi elementum, ipsum malesuada fringilla efficitur, massa orci luctus lacus, vel consequat purus mauris vulputate arcu. Curabitur sed tellus nisl. Sed dolor dui, ultrices eu tincidunt non, congue in sem. Suspendisse auctor ipsum sit amet justo venenatis, et mattis tortor blandit. Nulla consequat ante nec laoreet pellentesque. Quisque a sagittis erat. In at euismod arcu. Morbi consectetur nunc sit amet laoreet tempor.

Fusce tempor sem elit, eu bibendum eros rutrum eget. Suspendisse feugiat odio ac faucibus imperdiet. Duis lacinia risus tempus porta cursus. Quisque at maximus nunc. Sed ac semper nulla, nec rutrum nisi. Donec vulputate euismod hendrerit. Integer vitae sapien ut magna placerat dapibus nec eu dolor. Praesent ac ornare mauris, vitae tincidunt metus. Quisque vitae pretium tellus.

<br/>Morbi elementum, ipsum malesuada fringilla efficitur, massa orci luctus lacus, vel consequat purus mauris vulputate arcu. Curabitur sed tellus nisl. Sed dolor dui, ultrices eu tincidunt non, congue in sem. Suspendisse auctor ipsum sit amet justo venenatis, et mattis tortor blandit. Nulla consequat ante nec laoreet pellentesque. Quisque a sagittis erat. In at euismod arcu. Morbi consectetur nunc sit amet laoreet tempor.

Fusce tempor sem elit, eu bibendum eros rutrum eget. Suspendisse feugiat odio ac faucibus imperdiet. Duis lacinia risus tempus porta cursus. Quisque at maximus nunc. Sed ac semper nulla, nec rutrum nisi. Donec vulputate euismod hendrerit. Integer vitae sapien ut magna placerat dapibus nec eu dolor. Praesent ac ornare mauris, vitae tincidunt metus. Quisque vitae pretium tellus.

        </p>
      </div>

      <div className={classes.root}>
       <Grid container spacing={3}>
         <Grid item xs={12}>
           <Box textAlign="center"><h2><b>Our Team</b></h2></Box>
         </Grid>
        
         <Grid item xs={6} sm={3}>
           <img src={img} alt="Avatar" className={classes.img}/>
           <Box className={classes.paper}><b>Harsh Yadav</b></Box>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in consequat metus. Donec viverra, risus consequat aliquet iaculis, erat tortor vehicula metus, nec faucibus nisi velit vitae justo. Cras blandit quis purus sed semper. Ut feugiat lacus non enim semper, eu d
             <br/><LinkedInIcon color="primary" fontSize="large"/>
             <FacebookIcon color="primary" fontSize="large"/>
             <InstagramIcon color="primary" fontSize="large"/>
           </p>
         </Grid>
        
         <Grid item xs={6} sm={3} >
           <img src={img} alt="Avatar" className={classes.img}/>
           <Box className={classes.paper}><b>Anshu Kumar Singh</b></Box>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in consequat metus. Donec viverra, risus consequat aliquet iaculis, erat tortor vehicula metus, nec faucibus nisi velit vitae justo. Cras blandit quis purus sed semper. Ut feugiat lacus non enim semper, eu d
           <br/><LinkedInIcon color="primary" fontSize="large"/>
             <FacebookIcon color="primary" fontSize="large"/>
             <InstagramIcon color="primary" fontSize="large"/>
           </p>
         </Grid>

         <Grid item xs={6} sm={3}>
           <img src={img} alt="Avatar" className={classes.img}/>
           <Box className={classes.paper}><b>Himanshu Aneja</b></Box>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in consequat metus. Donec viverra, risus consequat aliquet iaculis, erat tortor vehicula metus, nec faucibus nisi velit vitae justo. Cras blandit quis purus sed semper. Ut feugiat lacus non enim semper, eu d
           <br/><LinkedInIcon color="primary" fontSize="large" />
             <FacebookIcon color="primary" fontSize="large"/>
             <InstagramIcon color="primary" fontSize="large"/>
           </p>
         </Grid>

         <Grid item xs={6} sm={3}>
           <img src={img} alt="Avatar" className={classes.img}/>
           <Box className={classes.paper}><b>Utkarsh Pandey</b></Box>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in consequat metus. Donec viverra, risus consequat aliquet iaculis, erat tortor vehicula metus, nec faucibus nisi velit vitae justo. Cras blandit quis purus sed semper. Ut feugiat lacus non enim semper, eu d
           <br/><LinkedInIcon color="primary" fontSize="large"/>
             <FacebookIcon color="primary" fontSize="large"/>
             <InstagramIcon color="primary" fontSize="large"/>
           </p>
         </Grid>

       </Grid>
      </div>
    </div>
  );
}
