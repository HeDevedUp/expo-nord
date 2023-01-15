// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { initializeFirestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const database = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true
})


export default app;
