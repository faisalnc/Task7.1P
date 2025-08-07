import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBks93Ji4ZMFKOhFsjoHvVpTRm_3lQ_tVM",
  authDomain: "devatdeakin-4b509.firebaseapp.com",
  projectId: "devatdeakin-4b509",
  storageBucket: "devatdeakin-4b509.appspot.com",
  messagingSenderId: "522434900619",
  appId: "1:522434900619:web:3b6f2a4b5221a85d129a8e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
