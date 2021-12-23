import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAse-f4Vtp1XBq0dki3Decq5XR3LXeLQEM",
  authDomain: "athena-square-mentors-sheet.firebaseapp.com",
  projectId: "athena-square-mentors-sheet",
  storageBucket: "athena-square-mentors-sheet.appspot.com",
  messagingSenderId: "590549893864",
  appId: "1:590549893864:web:75a0e4266deb29721bbf5d",
  measurementId: "G-0M7J5J5QMJ"
};

const app = initializeApp(firebaseConfig);

export default app;
