import { auth, db } from "../scripts/firebase.js";
import { createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { renderLogin } from "./login.js";

export function renderAddUser(container) {
  container.innerHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm border">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Add New User</h2>
        <form id="add-user-form" class="space-y-4">
          <input type="text" id="name" placeholder="Full Name" required class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" />
          <input type="email" id="email" placeholder="Email" required class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" />
          <input type="password" id="password" placeholder="Password" required class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" />
          <button type="submit" class="w-full bg-[#e63946] hover:bg-[#d62828] text-white py-2 rounded-md">Add User</button>
        </form>
        <button id="back-to-login-btn" class="mt-4 w-full text-center text-[#e63946] hover:underline">
          Back to Login
        </button>
      </div>
    </div>
  `;

  const form = container.querySelector("#add-user-form");
  form.onsubmit = async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    try {
      // Create user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Add to Firestore
      await addDoc(collection(db, "users"), {
        uid: userCredential.user.uid,
        name,
        email,
        createdAt: new Date()
      });

      // Sign out so user must log in manually
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
