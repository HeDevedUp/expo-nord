import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwvkCHlvnPB6Qe8xpF16kUJHSxLh1tP6w",
  authDomain: "myreact-ba182.firebaseapp.com",
  projectId: "myreact-ba182",
  storageBucket: "myreact-ba182.appspot.com",
  messagingSenderId: "26100785288",
  appId: "1:26100785288:web:dd004be059459aa5a43f3d",
  measurementId: "G-W3JPZN0XMW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
