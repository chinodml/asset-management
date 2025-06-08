import { auth } from "../firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

let topbarEl;
let titleEl;

export function renderTopbar(initialTitle) {
  topbarEl = document.getElementById("topbar-container");
  topbarEl.className =
    "flex justify-between items-center bg-[#f8f9fa] border-b border-gray-200 px-6 py-4 text-lg text-gray-800 font-semibold tracking-wide shadow-sm";

  // Add an inner title container so we can update it dynamically later
  topbarEl.innerHTML = `
    <div id="topbar-title">${initialTitle}</div>
    <button id="logout-btn" class="text-sm text-red-600 hover:underline">Logout</button>
  `;

  titleEl = document.getElementById("topbar-title");

  document.getElementById("logout-btn").onclick = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("isLoggedIn");
      window.initApp(); // Make sure window.initApp is globally defined
    });
  };
}

export function updateTopbar(newTitle) {
  if (titleEl) {
    titleEl.textContent = newTitle;
  }
}
