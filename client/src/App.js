import './styles/App.css';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <div className="App">
      {user && <NavBar user={user} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Main /> : <Login />} />
          <Route path="register" element={<Register user={user} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
