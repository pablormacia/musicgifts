// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import  {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZq6U9XwmY44UcN1ueoNBbOsq_ysKsqbY",
  authDomain: "musicgifts-812dc.firebaseapp.com",
  projectId: "musicgifts-812dc",
  storageBucket: "musicgifts-812dc.appspot.com",
  messagingSenderId: "832993128633",
  appId: "1:832993128633:web:032a0e97f772b498a9eb68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);