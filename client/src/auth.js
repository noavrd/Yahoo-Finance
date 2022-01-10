// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCT2EztQn59BApSl1hDn4-G7Fx8Lu0unN4',
  authDomain: 'fir-e2dad.firebaseapp.com',
  projectId: 'fir-e2dad',
  storageBucket: 'fir-e2dad.appspot.com',
  messagingSenderId: '356202679387',
  appId: '1:356202679387:web:706fc29b72be4c91ec837e',
};

// Initialize Firebase
export const firebaseAuth = initializeApp(firebaseConfig);
export const auth = getAuth();

export const provider = new GoogleAuthProvider();
