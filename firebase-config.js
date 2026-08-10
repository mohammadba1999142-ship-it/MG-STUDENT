import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVzem-4zlzJdzQsbcR72g-5rlzrYEqLNw",
  authDomain: "mg-student.firebaseapp.com",
  projectId: "mg-student",
  storageBucket: "mg-student.firebasestorage.app",
  messagingSenderId: "588754613430",
  appId: "1:588754613430:web:e239db50a1b8c64a706217"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);