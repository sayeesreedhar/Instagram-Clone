import React from 'react'
import {Icon,Grid, Button} from '@material-ui/core'
import "./homepage.css"
import firebase from 'firebase'
import Signin from '../Signin'
import Homepage from './Homepage'
import Signup from '../Signup'

const Navbarhome = () => {
    const logout=()=>{firebase.auth().signOut().then(() => {
        // Sign-out successful.
        localStorage.removeItem("users");
        window.location.reload();
      }).catch((error) => {
        // An error happened.
      });}
   
    return (
        <div>
            
            <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
            <div className="navbarhome">
            <Grid container spaceing={0}>
                <Grid item xs={2}>
                    

                </Grid>
                <Grid item xs={3}>
                    <img className="instagramlogonav" src="./images/instagram.png"/>
                    
                </Grid>
                <Grid item xs={3}>
                  <input className="search_field" type="text" placeholder="Search"/>
                    
                </Grid>
                <Grid item xs={4}>
                    <div classname="navicons">
                    <Icon id="navicons">home</Icon>
                    <Icon id="navicons">send</Icon>
                    <Icon id="navicons">explore</Icon>
                    <Icon id="navicons">favorite</Icon>
                    <Icon id="navicons">person</Icon>
                    <Button id="logout" onClick={logout}>Logout</Button>
                    </div>
                    
                </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Navbarhome
