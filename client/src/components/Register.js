import { useEffect, useState } from 'react';
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
  const [error, setError] = useState(null);
  const [change, setChange] = useState(false);
  const navigate = useNavigate();

  const createUser = async () => {
    if (
      (email !== '') &
      (password !== '') &
      (firstName !== '') &
      (lastName !== '')
    ) {
      setError(null);
      const displayName = firstName + ' ' + lastName;
      const auth = getAuth(firebaseAuth);
      await createUserWithEmailAndPassword(auth, email, password, displayName)
        .then((userCredential) => {
          setCreate(true);
          setChange(true);
          setError(null);
        })
        .catch((error) => {
          console.log(error);
          setError('Email already exist');
        });

      await updateProfile(auth.currentUser, { displayName: displayName });
    } else {
      setError('Please fill all the fields');
    }
  };
  useEffect(() => {
    console.log(user !== null);
    if (user !== null) {
      navigate('/');
    }
  }, []);
  useEffect(() => {
    if (change) {
      navigate('/');
    }
  }, [change]);
  console.log(error);
  return (
    <div className="register">
      <div className="outside"> </div>
      <div className="inner-register">
        <h1 className="register-headline">Register</h1>
        <input
          className="input-register"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />{' '}
        <br />
        <input
          className="input-register"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />{' '}
        <br />
        <input
          className="input-register"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />{' '}
        <br />
        <input
          className="input-register"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />{' '}
        <br />
        <button
          className="register-click"
          onClick={() => {
            createUser();
            if (error === null) {
              console.log(error);
            }
          }}>
          Register
        </button>
        {console.log(email)}
        <div className="error-register">{error !== null ? error : ' '}</div>
        <br />
        <Link to={'/'}>
          <i className="fa fa-home fa-3x home" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
}
