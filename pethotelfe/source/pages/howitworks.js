import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import  howitworks_img  from "./howitworks.png";
import { Link, animateScroll as scroll } from "react-scroll";
import Section from "./Section";
import dummyText from "./DummyText";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    '& > *': {
      margin: theme.spacing(1),
      borderBottom: "none",
    },
    
  },
  head: {
    display: "inline-block", 
  width: "100%",
  left:"0",
  right:"0",
  
  },
  img:{
    float:"right",
  },
  p_head:{
    float:"left",
    fontSize:"20px",
    fontStyle:"Italic",
    paddingTop:"20px",
  },
  button:{
    display: "inline-block",
    width: "100%",
    textAlign:"left",
    
  },
  buttongrp:{
    float:"left",
    width:"20%",
    paddingRight:"20px",
    
  },
  box:{
    float:"right",
    width:"80%",
    marginBottom:"20px",
  },
  // nav: {
  //   backgroundColor: "var(--off-white)",
  //   position: "relative",
  //   top: "0px",
  //   width: "100%",
  //   height: "80px",
  //   zIndex: "1000",
  //   boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.15)",
  // },
  
  // nav_item , active :{
  //   borderBottom: "1px solid #333",
  // },
  
  //  nav_content :{
  //   maxWidth: "900px",
  //   padding: "0rem 3rem",
  //   margin: "0 auto",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   height: "100%",
  // },
  
  // nav_item :{
  //   display: "inline",
  //   marginLeft: "2rem",
  //   color: "#333:",
  // },
  
  // nav_item:hover :{
  //   color: "black",
  //   cursor: "pointer",
  // },
    
  // section_dark :{
  //   background: "#333",
  //   color: "white",
  // },
  
  // section_content: {
  //   maxWidth: "800px",
  //   margin: "0 auto",
  //   padding: "40px",
  // },
}));

export default function Howitworks() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <div className={classes.head}>
      <p className={classes.p_head}><h4>Got Questions regarding how Whiskers Work?</h4><br/>We are here to help!</p>
      <img src={howitworks_img} className={classes.img} />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      <div className={classes.button}>
        
        <ul orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="text"
        className={classes.buttongrp}
        position="fixed"
        >
        <li className={classes.nav_item}>
          <Link activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
          >How it works?
          </Link>
        </li>
        <li className={classes.nav_item}>
          <Link activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
          >FAQs for Customers
          </Link>
        </li>
        <li className={classes.nav_item}>
          <Link activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
          >FAQs for Hosts
          </Link>
        </li>
      </ul>
        
        
        
      <Box boxShadow={3} className={classes.box}>
      <Section  title="Section 1" subtitle={dummyText}
          dark={true}
          id="section1"/>
      
          
      
      </Box>
      
      <Box boxShadow={3} className={classes.box}>
      <Section  title="Section 2" subtitle={dummyText}
          dark={true}
          id="section2"/>
      
          
      
      </Box>
      <Box boxShadow={3} className={classes.box}>
      <Section  title="Section 3" subtitle={dummyText}
          dark={true}
          id="section3"/>
      
          
      
      </Box>
      </div>
      
    </div>
  );
}
