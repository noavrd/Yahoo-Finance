import { getAuth, signOut } from 'firebase/auth';
export default function Logout() {
  const signout = () => {
    const auth = getAuth();
    signOut(auth)
      .then((result) => {
        console.log('sign-out');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={signout} className="sign-out">
        Logout
      </button>
    </div>
  );
}
