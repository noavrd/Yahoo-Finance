import { firebaseAuth, googleProvider } from '../auth';
import {
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';
import google from './5847f9cbcef1014c0b5e48c8-removebg-preview.png';
export default function Login() {
  const [emailLog, setEmailLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);

  const signInWithEmail = () => {
    if ((emailLog !== '') & (passwordLog !== '')) {
      setError(null);
      const auth = getAuth(firebaseAuth);
      signInWithEmailAndPassword(auth, emailLog, passwordLog)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.log(error);
          setError('Invalid email or password');
        });
    } else {
      setError('Please fill all the fields');
    }
  };

  const signInWithGoogle = () => {
    const auth = getAuth(firebaseAuth);
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div className="login">
      <div className="outside"></div>
      <div className="inner-login">
        <h1 className="headline-login">Stock Market</h1>
        <input
          className="input-login"
          id="username"
          placeholder="Email"
          onChange={(e) => setEmailLog(e.target.value)}
        />
        <br />
        <input
          className="input-login"
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPasswordLog(e.target.value)}
        />{' '}
        <br />
        <button onClick={signInWithEmail} className="sign-email">
          Log In
        </button>
        <div className="error-login">{error !== null ? error : ' '}</div>
        <div className="or">Or use</div>
        <button className="sign-in" onClick={signInWithGoogle}>
          <img src={google} alt="google-sign-in" className="google" />
        </button>
        <div className="dont-have">Don't have a user yet?</div>
        <Link to={'/register'}>
          <span className="register-btn">Register</span>
        </Link>
      </div>
    </div>
  );
}
