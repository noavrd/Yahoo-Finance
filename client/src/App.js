import './App.css';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Main from './components/Main';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
  console.log(user);
  // console.log(user);
  return <div className="App">{user ? <Main /> : <Login />}</div>;
}

export default App;
