import React from 'react'
import firebase from 'firebase'
import {Button,Grid, Link, makeStyles, Paper,Box, styled} from '@material-ui/core';
import Homepage from './Homepage/Homepage';
import Signup from './Signup'
const Signin = () => {
    const [emails, setemails] = React.useState(null);
    const [passwords, setpasswords] = React.useState(null);
    const [status, setstatus] = React.useState(false);
    const [err, seterr] = React.useState("");
    const [datas, setdatas] = React.useState(null);
    var obj=null;
     function authenticates(){firebase.auth().signInWithEmailAndPassword(emails, passwords)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    localStorage.setItem("users",user);
    localStorage.setItem("uid",user.uid);
    console.log("Logged in successfully",user);
    setstatus("true");localStorage.setItem("username",emails);
   
    const opt= {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('http://localhost:8080/users/54',opt).then(response => response.json()).then(data => {
  
  
      setdatas(data);
    console.log(datas);
   localStorage.setItem("data",datas)

})
.catch(err => console.log(err))

      
 console.log(datas)
  
   window.location.reload();

    
    // ...
  } )
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    seterr("Invalid Credntials.Please Try Again!");

  });
}
    return (
        <div>
            <div className="login_space">
      <img className="login_logo" src="./images/instagram.png"/>
      <div className="infolog">{err}</div>
      <div className="login_rows"><form>
      <input className="login_field login_rows" onChange={(event)=>{setemails(event.currentTarget.value);console.log(emails)}} type="text" placeholder="Phone number,username or email"/><br/>
      <input className="login_field login_rows" onChange={(event)=>{setpasswords(event.currentTarget.value);console.log(passwords)}} type="password" placeholder="Password"/>
    </form></div>
    <div className="login_but"><Button id="login_button" onClick={authenticates}>Log In</Button></div>
   
    <span className="login_separator">--------------------</span>
    <span className="login_separator">OR</span>
    <span className="login_separator">---------------------</span>
    <div className="login_gap"><a href="#" id="login_facebooktext"><img className="login_facebook" src=".\images\facebook.png"/>Log In With Facebook</a></div>
    <a href="#" className="login_password">Forgot Password?</a>
   
    </div>
    
        </div>
    )
}

export default Signin
