import React from 'react'
import firebase from 'firebase'
import {Icon} from '@material-ui/core'
//import { useEffect } from 'react'

const Status = () => {
    const data=[{username:"sayee"},{username:"ram"},{username:"krishna"}/*,{username:"jack sparrow"},{username:"tony stark"},{username:"Enzo Ferrari"},{username:"Peter Parker"},{username:"Peter Parker"}*/]
    const [statusdata, setstatusdata] = React.useState(data);
    const [status, setstatus] = React.useState([]);
    const [but, setbut] = React.useState(false);
   const upload=(event)=>{
       let image=event.target.files[0];
       
       var storageRef = firebase.storage().ref();
       if(image==null||image==undefined)
       return;
       var uploadTask = storageRef.child(image.name).put(image);

       // Register three observers:
       // 1. 'state_changed' observer, called any time the state changes
       // 2. Error observer, called on failure
       // 3. Completion observer, called on successful completion
       uploadTask.on('state_changed', 
         (snapshot) => {
           // Observe state change events such as progress, pause, and resume
           // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
           var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           console.log('Upload is ' + progress + '% done');
           switch (snapshot.state) {
             case firebase.storage.TaskState.PAUSED: // or 'paused'
               console.log('Upload is paused');
               break;
             case firebase.storage.TaskState.RUNNING: // or 'running'
               console.log('Upload is running');
               break;
           }
         }, 
         (error) => {
           // Handle unsuccessful uploads
         }, 
         () => {
           // Handle successful uploads on complete
           // For instance, get the download URL: https://firebasestorage.googleapis.com/...
           uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
             console.log('File available at', downloadURL);
             
             let user=localStorage.getItem("uid");
             const params={
               "statusid":Math.floor(Math.random()*10000),
               "userid":user,
               "path":downloadURL
            
               
           }
           const opt= {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify(params)
             }
           fetch('http://localhost:8080/status',opt)
     .then(response => response.json()).then(data => {
       console.log('Success:', data);
     })
     .catch(err => console.log(err))
           });
         }
       );
       ;}
       const getstatus=()=>{fetch('http://localhost:8080/status')
       .then(response => response.json()).then(data => {
         console.log('Success:', data);setstatus(data);console.log(status);setbut(true);
       })
      .catch(err => console.log(err))} 
     
    return (
        <div className="status">
            <Icon  id="addstatus">add<input onChange={upload} className="upload" type="file"/></Icon>
            {statusdata.map((curElem)=>(<div className="statuslist"><Icon id="naviconsstatus">person</Icon><br/>
            {curElem.username}</div>))}
            {status.map((curElem)=>(<div className="statuslist"><Icon id="naviconsstatus">person</Icon><br/>
            {curElem.username}</div>))}
            <div className="suggestions" onClick={getstatus}>{but?<div></div>:<div>More</div>}</div>
            {status.map((curElem)=>(<div className="statuslist">{/*<Icon id="naviconsstatus">person</Icon>*/}<img className="naviconsstatus" src={curElem.path}/><br/>
            {curElem.username}</div>))}
        </div>
    )
}

export default Status
