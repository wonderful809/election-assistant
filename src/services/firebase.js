import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

/**
 * Firebase configuration
 */
const firebaseConfig = {
  apiKey: "AIzaSyCH_uhzCotTheJwVWsOzFn3NxIpuZByxdU",
  authDomain: "election-guide-a69dd.firebaseapp.com",
  projectId: "election-guide-a69dd",
  storageBucket: "election-guide-a69dd.appspot.com",
  messagingSenderId: "115616849380",
  appId: "1:115616849380:web:ed673860f2a741c4353bf1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
