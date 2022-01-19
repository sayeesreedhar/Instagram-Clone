import React from 'react'

const Followers = ({followid}) => {
    const [showfollow, setshowfollow] = React.useState(false);
    const setfollow=()=>{
        showfollow?setshowfollow(false):setshowfollow(true);
        const params={
            "userid": localStorage.getItem("uid"),
        "followerid": followid
        }
        const opt= {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
          }
        fetch('http://localhost:8080/followers',opt)
  .then(response => response.json()).then(data => {
    console.log('Success:', data);
  })
  .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="follow" onClick={setfollow}>{showfollow?<div>Following</div>:<div>Follow</div>}</div>
        </div>
    )
}

export default Followers

