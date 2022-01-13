import { useEffect, useState } from 'react';
import Logout from './Logout';
import '../styles/navbar.css';

export default function NavBar({ user }) {
  const [clicked, setClicked] = useState(false);
  const [userName, setUserName] = useState(user.displayName);

  useEffect(() => {
    setTimeout(() => {
      setUserName(user.displayName);
    }, 500);
  }, []);
  return (
    <div className="navbar">
      <div onClick={() => setClicked(!clicked)} className="user-name">
        {userName}{' '}
        {clicked ? (
          <i className="fa fa-angle-up" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        )}
        {clicked && <Logout />}
      </div>
    </div>
  );
}
