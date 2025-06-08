import { auth } from "../scripts/firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { renderAddUser } from "./addUser.js"; 


export function renderLogin(container) {
  container.innerHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm border">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Login to Fuwa Admin</h2>
        <form id="login-form" class="space-y-4">
          <input type="text" id="username" placeholder="Email" required class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" />
          <input type="password" id="password" placeholder="Password" required class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" />
          <button type="submit" class="w-full bg-[#e63946] hover:bg-[#d62828] text-white py-2 rounded-md">Login</button>
        </form>
        <button id="add-user-btn" class="mt-4 w-full text-center text-[#e63946] hover:underline">
          Add User
        </button>
      </div>
    </div>
  `;

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
