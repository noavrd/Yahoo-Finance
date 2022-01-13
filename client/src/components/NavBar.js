import { useEffect, useState } from 'react';
import Logout from './Logout';

export default function NavBar({ user }) {
  const [clicked, setClicked] = useState(false);
  const [userName, setUserName] = useState(user.displayName);
  console.log(user);
  console.log(user.displayName);

  useEffect(() => {
    setTimeout(() => {
      setUserName(user.displayName);
    }, 500);
  }, []);
  return (
    <div className="navbar">
      <button onClick={() => setClicked(!clicked)} className="user-name">
        {userName}{' '}
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
