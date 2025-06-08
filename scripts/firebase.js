// scripts/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// Replace with your actual config
const firebaseConfig = {
  apiKey: "AIzaSyDaETOANrCik3VzwIJH2W0N7aICyeDBnns",
  authDomain: "asset-management-3505a.firebaseapp.com",
  projectId: "asset-management-3505a",
  storageBucket: "asset-management-3505a.firebasestorage.app",
  messagingSenderId: "632969958356",
  appId: "1:632969958356:web:a8edd1778c6789fee5bc41"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
