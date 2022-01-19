import React from 'react'
import {Icon} from '@material-ui/core'
import Comments from './Comments';


const Posts = () => {
    const [posts, setposts] = React.useState([]);
    const [moreopt, setmoreopt] = React.useState(false);
    const feed=()=>{
        const rev=localStorage.getItem("uid");
        fetch(`http://localhost:8080/post/${rev}`)
      .then(response => response.json()).then(data => {
        console.log('Success:', data);setposts(data);console.log(posts);
      })
      .catch(err => console.log(err))
    }
    
    return (
        
        <div>{posts.map((curElem)=>(<div className="feed">
        <div className="feed_header">
            <Icon id="naviconsstatus">person</Icon>
            <div className="feed_user">{curElem.username}</div>
        </div>
        <div >
           <img className="feed_image" src={curElem.postpath}/>
        </div>
        <div className="feed_react">
            <Icon id="feed_reacticons">favorite</Icon>
            <Icon id="feed_reacticons">send</Icon>
            <Icon id="feed_reacticons">chat</Icon>
        </div>
        <div className="feed_likes">10562 likes</div>
        <div>
            <Comments postid={curElem.postid}/>
            <div>
                
            </div>
            
        </div>
        </div>))}
            
                <div className="suggestions" onClick={feed}>{moreopt?<div>Less</div>:<div>More</div>}</div>
        </div>
    )
}

export default Posts
