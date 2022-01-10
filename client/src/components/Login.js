import { firebaseAuth, googleProvider } from '../auth';
import {
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      .catch((error) => {});
  };

  const createUser = () => {
    const auth = getAuth(firebaseAuth);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {});
  };
  const signInWithGoogle = () => {
    const auth = getAuth(firebaseAuth);
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div>
      <h1>Register</h1>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={createUser}>Register</button>
      {console.log(email)}
      <h1>LogIn</h1>
      <input
        placeholder="Email"
        onChange={(e) => setEmailLog(e.target.value)}
      />
      <input
        placeholder="Password"
        onChange={(e) => setPasswordLog(e.target.value)}
      />
      <button onClick={signInWithEmail}>sign in with email</button>

      <button className="sign-in" onClick={signInWithGoogle}>
        Sign In with google
      </button>
    </div>
  );
}
