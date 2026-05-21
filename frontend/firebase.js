// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nep-ai.firebaseapp.com",
  projectId: "nep-ai",
  storageBucket: "nep-ai.firebasestorage.app",
  messagingSenderId: "275318600660",
  appId: "1:275318600660:web:7627c2637402d2c59adc41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export { auth, provider };
