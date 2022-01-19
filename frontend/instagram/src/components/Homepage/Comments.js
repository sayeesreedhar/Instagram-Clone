import React from 'react'

const Comments = ({postid}) => {
    const [comments, setcomments] = React.useState([]);
    const setcomment=(event)=>{
        console.log(localStorage.getItem("uid"))
        if(event.key=="Enter")
        {const comment=event.currentTarget.value;
        if(comment!=null||comment!=undefined)
    {const params={
        
        "commentid": Math.floor(Math.random()*100000),
        "userid": localStorage.getItem("uid"),
        "comments": comment,
        "postid": postid,
        
        "time": "1970-01-01T00:00:12.346+00:00"
    }
        const opt= {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
          }
        fetch('http://localhost:8080/comments',opt)
  .then(response => response.json()).then(data => {
    console.log('Success:', data);
  })
  .catch(err => console.log(err))
    }}

    }
    const loadcomments=()=>{
        console.log(postid);
        const gets=postid;
        console.log(`http://localhost:8080/comments/${gets}`);
        fetch(`http://localhost:8080/comments/${gets}`)
  .then(response => response.json()).then(data => {
    console.log('Success:', data);setcomments(data);console.log(comments);
  })
  .catch(err => console.log(err))
    

    }
    return (
        <div>{console.log(postid)}
            {/*<div className="feed_comment">Nice phone!</div>*/}
            {/*<div className="feed_comment">Nice iphone!</div>*/}
            {/*<div className="feed_comment">Good phone!</div>*/}
            <div className="feed_comment" onClick={loadcomments}>Show Comments</div>
            {comments.map((curElem)=>(<div className="feed_comment">{curElem.comments}</div>))}
            <input className="feed_comment_input" onKeyPress={setcomment} type="text" placeholder="Add a comment"/>
        </div>
    )
}

export default Comments
