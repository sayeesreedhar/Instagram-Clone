import React from 'react';
import "./instagram.css";

import {Button,Grid, Link, makeStyles, Paper,Box, styled} from '@material-ui/core';
import Signin from './Signin';
import Signup from './Signup'
import Navbarhome from './Homepage/Navbarhome';
import Homepage from './Homepage/Homepage';


const Loginpage = () => {
  const [login, setlogin] = React.useState(true);
  
    return (
        <>
        <Grid container spacing={0}>
  <Grid item xs={3}>
    
  </Grid>
  <Grid item xs={4} >
    
    <img className="middle" src="./images/iphone.png"/>
  </Grid>
  <Grid item xs={5}>
    {login?<Signin/>:<Signup/>}
    {login?<div className="login_signupspace">
      Don't have an account?<h4 id="login_facebooktext" onClick={()=>{login?setlogin(false):setlogin(true);}}>Sign Up</h4>
    </div>:<div className="login_signupspace">
      Have an account?<a id="login_facebooktext" onClick={()=>{login?setlogin(false):setlogin(true);}}>Log In</a>
    </div>}
    <div className="app">Get the app.
      
    </div>
    <div  className="rowofapp">
        <img className="appstore" src="./images/playstore.png"/>
        <img className="appstores" src="./images/appstore.png"/>
      </div>
    
    
    
  </Grid>
  </Grid>
  {/*<Homepage/>*/}
      
  
            
        </>
    )
}

export default Loginpage

