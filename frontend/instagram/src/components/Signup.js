import React from 'react'
import firebase from 'firebase'
import {Button,Grid, Link, makeStyles, Paper,Box, styled} from '@material-ui/core';
firebase.initializeApp({
    apiKey: "AIzaSyAOHNNLvQR1-GXPlMeegtOVkOngh0LDJEU",
  authDomain: "instagramclone-76265.firebaseapp.com",
  projectId: "instagramclone-76265",
  storageBucket: "instagramclone-76265.appspot.com",
  messagingSenderId: "423243911888",
  appId: "1:423243911888:web:ca8754dc573edd155784d5",
  measurementId: "G-CMMSS7LCNB"
});
  
const Signup = () => {
    const [email, setemail] = React.useState(null);
    const [fullname, setfullname] = React.useState(null);
    const [password, setpassword] = React.useState(null);
    const [username, setusername] = React.useState(null);
    const [info, setinfo] = React.useState("");
    const newsignup=()=>{firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        setinfo("You have been registered successfully.Login to continue");
        console.log(info);
        const params={
            "userid":user.uid,
            "username":username,
            "fullName":fullname
        }
        const opt= {
            method: 'POST',
            
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
          }
        fetch('http://localhost:8080/users',opt)
  .then(response => response.json()).then(data => {
    console.log('Success:', data);
  })
  .catch(err => console.log(err))
  
        // ...
        
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setinfo("Invalid email id or password.Ensure that the password contains minimum of 8 alphanumeric values");
        // ..
        localStorage.setItem("username",username);
      });}
    return (
        
        <div className="login_space">
      <img className="login_logo" src="./images/instagram.png"/>
      <div className="infolog">{info}</div>
      <div className="login_rows"><form>
      <input className="login_field login_rows" onChange={(event)=>{setemail(event.currentTarget.value);console.log(email)}} type="text" placeholder="Mobile number or email"/><br/>
      <input className="login_field login_rows" onChange={(event)=>{setfullname(event.currentTarget.value);console.log(fullname)}} type="text" placeholder="Full Name"/><br/>
      <input className="login_field login_rows" onChange={(event)=>{setusername(event.currentTarget.value);console.log(username)}} type="text" placeholder="Username"/><br/>
      <input className="login_field login_rows" onChange={(event)=>{setpassword(event.currentTarget.value);console.log(password)}}type="password" placeholder="Password"/>
    </form></div>
    <div className="login_but"><Button id="login_button" onClick={newsignup}>Sign Up</Button></div>
    <div className="termsandconditions">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</div>
    
        </div>
    )
}

export default Signup
