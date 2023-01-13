
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyADSoqNwNQhh_CPpKuHBq3NxZUGo03s-so",
  authDomain: "ashdoa-3201f.firebaseapp.com",
  projectId: "ashdoa-3201f",
  storageBucket: "ashdoa-3201f.appspot.com",
  messagingSenderId: "478895439630",
  appId: "1:478895439630:web:cc55f0de88eaba2626e15f",
  measurementId: "G-M6HS49KC6X"
};
export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);