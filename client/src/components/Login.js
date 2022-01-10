import { firebaseAuth, provider } from '../auth';
import { signInWithPopup, getAuth } from 'firebase/auth';
export default function Login() {
  const signInWithGoogle = () => {
    const auth = getAuth(firebaseAuth);

    signInWithPopup(auth, provider);
  };

  return (
    <div>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign In with google
      </button>
    </div>
  );
}
