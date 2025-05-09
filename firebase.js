import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0Iw3_Ddkn160CD5Cv2gkNsm30bT2LlsQ",
  authDomain: "clinic-app-4a11e.firebaseapp.com",
  projectId: "clinic-app-4a11e",
  storageBucket: "clinic-app-4a11e.appspot.com",
  messagingSenderId: "1025911518988",
  appId: "1:1025911518988:web:5d434eb0670018a315bb29"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);