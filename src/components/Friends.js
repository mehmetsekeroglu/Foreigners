import React from 'react';
//import { render, screen } from '@testing-library/react';

import './friends.css'


export default function Friends({friends}){
    return (
        <div className="flex-class">
        <h1>Friends</h1>
        <ul className="test">
<li>Test</li>
<li>icin</li>
<li>uretilmistir</li>
        </ul>
       { friends && friends.map(friend=>{
            return <div className="App-friends">
              
        <div className="friends-detail">
            <img src={friend.avatar} className="avatar-friends" alt={friend.firstName} />
            <span>{friend.firstName}</span>
            <span>{friend.lastName}</span>
            <span>{friend.gender}</span>
        </div>
        <ul className="friends-part">
            <li>{friend.phone}</li> 
            <li>{friend.address}</li> 
            <li>{friend.city}</li> 
            <li>{friend.birthday}</li> 
            <li>{friend.language}</li> 
            <li>{friend.profession}</li> 
            <li>{friend.salary}</li>    
        </ul>
      </div>
        })
    
     } 
     </div>)
}
// test('render h1 element', () => {
//     render(<Friends />);
//     expect(screen.getByText('Friends')).toBeInTheDocument();
//   });

// test('list -test', () => {
//     render(<Friends />);
  
//     const listElement = screen.getByRole('list');
  
//     expect(listElement).toBeInTheDocument();
//     expect(listElement).toHaveClass('test');
    
//   });

//   test('div-class', () => {
//     render(<Friends />);
//   expect.toHaveClass('flex-class');
//   });

  