import { useState } from 'react';
import Logout from './Logout';

export default function NavBar({ user }) {
  const [clicked, setClicked] = useState(false);
  console.log(user);
  return (
    <div className="navbar">
      <button onClick={() => setClicked(!clicked)} className="user-name">
        {user.displayName}{' '}
        {clicked ? (
          <i className="fa fa-angle-up" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        )}
        {clicked && <Logout />}
      </button>
    </div>
  );
}
