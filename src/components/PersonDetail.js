import Children from './Children'
import Friends from './Friends'
import './person-detail.css';

export default function PersonDetail(props){
    return (
      <div className="App-person">
        <div id="person-detail-container">
        <h3> <span>{props.first_name} {props.last_name}</span></h3>
            <img src={props.avatar} className="avatar-person" alt={props.first_name} />
            <div className="person-name">
                <span><strong>{props.friends.length} </strong>Friends</span>
                <span><strong>{props.children.length}</strong> Children</span>  
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
       <div className="friends-info">
         <Friends friends={props.friends}/>  
       </div>
        </div>
       <div id="children-container">
         <h3>{props.first_name}'s Children</h3>
         <div className="children-info">
           <Children children={props.children}/>
         </div>
          
       </div> 
      </div>
    )
}

