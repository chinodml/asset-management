// scripts/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Replace with your actual config
const firebaseConfig = {
  apiKey: "AIzaSyDaETOANrCik3VzwIJH2W0N7aICyeDBnns",
  authDomain: "asset-management-3505a.firebaseapp.com",
  projectId: "asset-management-3505a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
