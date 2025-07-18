import { auth } from "../scripts/firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { renderAddUser } from "./addUser.js"; 


export function renderLogin(container) {
  container.innerHTML = `

    
<div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border ">
  <h2 class="text-3xl font-semibold text-center text-orange-900 mb-6">Welcome Back</h2>
  <form id="login-form" class="space-y-4">
    <input type="email" id="username" placeholder="Email" class="w-full px-4 py-2 border border-[#d88c6f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b46f56]" required />
    <input type="password" id="password" placeholder="Password" class="w-full px-4 py-2 border border-[#d88c6f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b46f56]" required />
    <button type="submit" class="w-full bg-[#d88c6f] text-white py-2 rounded-md hover:bg-[#b46f56] transition">Login</button>
  </form>
  <p class="text-sm text-center text-gray-600 mt-4">
    Don’t have an account? <a id="add-user-btn" href="#" class="text-[#b46f56] hover:underline">Sign up</a>
  </p>
</div>

    
  `;


  

    // bg-[#e05d00] hover:bg-[#c44f00]

  // Login form submit
  const form = container.querySelector("#login-form");
  form.onsubmit = e => {
    e.preventDefault();

    const email = form.username.value.trim();
    const password = form.password.value.trim();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.initApp(); // Re-init the UI after login
      })
      .catch(error => {
        alert("Login failed: " + error.message);
      });
  };

  // Add User button click
  container.querySelector("#add-user-btn").onclick = () => {
    renderAddUser(container);
  };
}
