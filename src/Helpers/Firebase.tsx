import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBca1vV7O3NwaZQr5w_3Gan6yhWu7f89ck",
  authDomain: "chatapp-50ffd.firebaseapp.com",
  projectId: "chatapp-50ffd",
  storageBucket: "chatapp-50ffd.appspot.com",
  messagingSenderId: "995806466027",
  appId: "1:995806466027:web:69843d4dd6c3ad19df93ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app);;

export { app, analytics, auth, db };
