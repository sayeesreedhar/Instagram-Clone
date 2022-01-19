import React from 'react'
import {Grid,Icon} from '@material-ui/core'
import Status from './Status'
import Posts from './Posts'
import Info from './Info'
import firebase from 'firebase'
const Content = () => {
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
                "postid":Math.floor(Math.random()*10000),
                "userid":localStorage.getItem("uid"),
                "postpath":downloadURL,
                "username":"sayee"
                
            }
            const opt= {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
              }
            fetch('http://localhost:8080/post',opt)
      .then(response => response.json()).then(data => {
        console.log('Success:', data);
      })
      .catch(err => console.log(err))
            });
          }
        );}
        


    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    
                    </Grid>
                    <Grid item xs={6}>
                       <Status/>
                      <div> <Icon id="upload">upload</Icon>
                       <input onChange={upload} className="upload" type="file"/></div>
                       <Posts/>
                       
                        
                    </Grid>
                    <Grid item xs={4}>
                      <Info/>
                    </Grid>
                </Grid>
            
        </div>
    )
}

export default Content

