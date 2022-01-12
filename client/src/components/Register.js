import { useState } from 'react';
import { firebaseAuth } from '../auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

export default function Register({ user }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [create, setCreate] = useState(false);
  const navigate = useNavigate();

  const createUser = async () => {
    const displayName = firstName + ' ' + lastName;
    const auth = getAuth(firebaseAuth);
    await createUserWithEmailAndPassword(auth, email, password, displayName)
      .then((userCredential) => {
        setCreate(true);
      })
      .catch((error) => {});

    await updateProfile(auth.currentUser, { displayName: displayName });
  };

  return (
    <div>
      {console.log(user)}
      {/* {user && navigate('/')} */}
      <h1>Register</h1>
      <form onSubmit={() => navigate('/')}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <button onClick={createUser}>Register</button>
        {console.log(email)}
      </form>
    </div>
  );
}
