import Children from './Children'
import Friends from './Friends'
import './person-detail.css';

export default function PersonDetail(props){
    return (
      <div className="App-person">
        <div id="person-detail-container">
            <img src={props.avatar} className="avatar-person" alt={props.first_name} />
            <div className="person-name">
                <span>{props.first_name} {props.last_name}</span>
                <span>{props.friends.length} <strong>Friends</strong></span>
                <span>{props.children.length} <strong>Children</strong></span>  
            </div>
            <div className="person-info">
                <span><strong>Gender</strong>:{props.gender}</span>
                <span><strong>Address</strong>:{props.address}</span>
                <span><strong>E-Mail</strong>:{props.email}</span>
                <span><strong>Salary</strong>:{props.salary}</span> 
                 
            </div>
           
        </div>
    <div id="friends-container">
          <h3>{props.first_name}'s Friends</h3>
        <Friends friends={props.friends}/>   
        </div>
       <div id="children-container">
         <h3>{props.first_name}'s Children</h3>
        <Children children={props.children}/>  
       </div> 
      </div>
    )
}

