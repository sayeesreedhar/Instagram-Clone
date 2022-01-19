import React from 'react'
import { Icon } from '@material-ui/core'
import "./homepage.css"
import Followers from './Followers';

const Info = () => {
    const [people, setpeople] = React.useState([]);
    const [moreopt, setmoreopt] = React.useState(false);
    const [follow, setfollow] = React.useState(true);
    const [datas, setdatas] = React.useState(null);
    const [usernames, setusernames] = React.useState("");
    
  
    const more=()=>{
      const opt= {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
        
      }
    fetch('http://localhost:8080/users/all',opt)
.then(response => response.json()).then(data => {
console.log(data)
setpeople(data);
moreopt?setmoreopt(false):setmoreopt(true);


})
.catch(err => console.log(err))

const opts= {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}
fetch('http://localhost:8080/users/${users}',opts).then(response => response.json()).then(data => 
console.log(data))
.catch(err => console.log(err))

  
console.log(datas)
    }
    const follows=()=>{follow?setfollow(false):setfollow(true);
       
    }
    
    return (
        <div>
            <div className="info"><Icon id="info_icon">person</Icon>
                        <div className="infoname">{localStorage.getItem("username")}<br/><div className="infotype">Developer</div></div>
                        </div>
            <div className="suggestions">Suggestions for you</div>
            <div><div className="info">  {/*<Icon id="info_icon">person</Icon>*/}<img className="infoimage" src="https://pbs.twimg.com/profile_images/1903539737/image.jpg"/>
                        <div className="infoname">Jermy_Clarkson <div className="follow" onClick={follows}>{follow?<div>Following</div>:<div>Follow</div>}</div></div></div></div>
                        <div><div className="info">  {/*<Icon id="info_icon">person</Icon>*/}<img className="infoimage" src="https://upload.wikimedia.org/wikipedia/commons/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg"/>
                        <div className="infoname">Arnold_63<div className="follow">Follow</div></div></div></div>
                        <div><div className="info">  {/*<Icon id="info_icon">person</Icon>*/}<img className="infoimage" src="https://www.lambocars.com/wp-content/uploads/2013/02/ferruccio3.jpg"/>
                        <div className="infoname">Fericio Lamborghini<div className="follow">Follow</div></div></div></div>
                        <div><div className="info">  {/*<Icon id="info_icon">person</Icon>*/}<img className="infoimage" src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"/>
                        <div className="infoname">Jeff Bezoz<div className="follow">Follow</div></div></div></div>
                        <div className="suggestions" onClick={more}>{moreopt?<div>Less</div>:<div>More</div>}</div>
                        {moreopt?people.map((curElem)=>(<div><div className="info">  <Icon id="info_icon">person</Icon>
                        <div className="infoname">{curElem.username}{/*<div className="follow">Follow</div>*/}<Followers followid={curElem.userid}/></div></div></div>)):<div></div>}
        </div>
    )
}

export default Info
