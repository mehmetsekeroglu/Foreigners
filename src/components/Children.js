import './children.css';
export default function Children(props){
    return (
        props.children.map(child=>{
            return <div className="App-children">
        <img src={child.avatar} className="avatar-children" alt={props.firstName} />
        <span>{child.firstName}</span>
        <span>{child.lastName}</span>
        <span>{child.gender}</span>
        <span>{child.birthday}</span> 
      </div>
        })
    )
}


