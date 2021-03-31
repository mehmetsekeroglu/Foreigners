import './friends.css'
export default function Children({friends}){
    return (
        friends.map(friend=>{
            return <div className="App-friends">
        <img src={friend.avatar} className="avatar-friends" alt={friend.firstName} />
        <span>{friend.firstName}</span>
        <span>{friend.lastName}</span>
        <span>{friend.gender}</span>
        <span>{friend.phone}</span> 
        <span>{friend.address}</span> 
        <span>{friend.city}</span> 
        <span>{friend.birthday}</span> 
        <span>{friend.language}</span> 
        <span>{friend.profession}</span> 
        <span>{friend.salary}</span> 
      </div>
        })
    )
}
