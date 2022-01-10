import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
export default function Register(params) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const createUser = () => {
    const auth = getAuth(firebaseAuth);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {});
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
    </div>
  );
}
