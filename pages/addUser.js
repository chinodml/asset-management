import { auth, db } from "../scripts/firebase.js";
import { createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { renderLogin } from "./login.js";

export function renderAddUser(container) {
  container.innerHTML = `


    
<div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border ">
  <h2 class="text-3xl font-semibold text-center text-orange-900 mb-6">Create Account</h2>
  <form id="signup-form" class="space-y-4">
    <input type="text" id="name" placeholder="Full Name" class="w-full px-4 py-2 border border-[#d88c6f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b46f56]" required />
    <input type="email" id="email" placeholder="Email" class="w-full px-4 py-2 border border-[#d88c6f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b46f56]" required />
    <input type="password" id="password" placeholder="Password" class="w-full px-4 py-2 border border-[#d88c6f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b46f56]" required />
    <input type="password" id="confirm-password" placeholder="Confirm Password" class="w-full px-4 py-2 border border-[#d88c6f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b46f56]" required />
    <button type="submit" class="w-full bg-[#d88c6f] text-white py-2 rounded-md hover:bg-[#b46f56] transition">Sign Up</button>
  </form>
  <p class="text-sm text-center text-gray-600 mt-4">
    Already have an account? <a id="back-to-login-btn" href="#" class="text-[#b46f56] hover:underline">Login</a>
  </p>
</div>
    


    
  `;



  const form = container.querySelector("#signup-form");
  form.onsubmit = async (e) => {
    e.preventDefault();
  
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form["confirm-password"].value.trim();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      await addDoc(collection(db, "users"), {
        uid: userCredential.user.uid,
        name,
        email,
        createdAt: new Date()
      });
  
      await signOut(auth);
  
      alert("User added successfully! Please log in.");
      renderLogin(container);
    } catch (error) {
      alert("Error adding user: " + error.message);
    }
  };
  

  container.querySelector("#back-to-login-btn").onclick = () => {
    renderLogin(container);
  };
}
