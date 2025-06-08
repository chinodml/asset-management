import { auth } from "../firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

let topbarEl;
let titleEl;

export function renderTopbar(initialTitle) {
  topbarEl = document.getElementById("topbar-container");

  topbarEl.className = `
    flex justify-between items-center 
    bg-orange-100 border-b  
    px-6 py-4 text-xl text-[#4b2e2e] 
    font-semibold tracking-wide shadow-sm
  `;

  topbarEl.innerHTML = `
    <div id="topbar-title">${initialTitle}</div>
    <button id="logout-btn" class="text-sm text-white bg-[#e05d00] hover:bg-[#c44f00] px-3 py-1 rounded-md transition">
      Logout
    </button>
  `;

  titleEl = document.getElementById("topbar-title");

  document.getElementById("logout-btn").onclick = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("isLoggedIn");
      window.initApp(); // Re-init app
    });
  };
}

export function updateTopbar(newTitle) {
  if (titleEl) {
    titleEl.textContent = newTitle;
  }
}
