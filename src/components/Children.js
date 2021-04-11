import React from 'react';
//import { render, screen } from '@testing-library/react';
import './children.css';
export default function Children(props){
    return (
        props.children.map(child=>{
            return <div className="App-children">
        <img src={child.avatar} className="avatar-children" alt={props.firstName} />
        <span>{child.firstName} {child.lastName}</span>
        <span>{child.gender}</span>
        <span>{child.birthday}</span> 
      </div>
        })
    )
}

// test('div-class', () => {
//     render(<Children />);
//   expect.toHaveClass('App-children');
//   });

