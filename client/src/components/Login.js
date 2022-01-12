import { firebaseAuth, googleProvider } from '../auth';
import {
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
  const [emailLog, setEmailLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');

  const signInWithEmail = () => {
    const auth = getAuth(firebaseAuth);
    signInWithEmailAndPassword(auth, emailLog, passwordLog)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithGoogle = () => {
    const auth = getAuth(firebaseAuth);
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div className="login">
      <div className="inner-login">
        <h1 className="headline-login">LogIn</h1>
        <form>
          <input
            id="username"
            placeholder="Email"
            onChange={(e) => setEmailLog(e.target.value)}
          />
          <br />
          <input
            id="password"
            placeholder="Password"
            onChange={(e) => setPasswordLog(e.target.value)}
          />{' '}
          <br />
          <button onClick={signInWithEmail}>sign in with email</button>
        </form>
        <button className="sign-in" onClick={signInWithGoogle}>
          Sign In with google
        </button>
        <h3>Don't have a user yet?</h3>
        <Link to={'/register'}>Register</Link>
      </div>
    </div>
  );
}
