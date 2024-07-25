import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXOlAz0ngBUnjLt3oDt5aetpfU2zfvjLc",
  authDomain: "thanhdao-3c5ff.firebaseapp.com",
  projectId: "thanhdao-3c5ff",
  storageBucket: "thanhdao-3c5ff.appspot.com",
  messagingSenderId: "927313929250",
  appId: "1:927313929250:web:b7fc9fc1dca2e525cbd67b",
  measurementId: "G-G7K4PNVJ3V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app