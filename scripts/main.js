import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { renderLogin } from "../pages/login.js";
import { renderSidebar } from "./components/sidebar.js";
import { renderTopbar, updateTopbar } from "./components/topbar.js";
import { routeTo } from "./router.js";

const appContainer = document.getElementById("app-container");
const authContainer = document.getElementById("auth-container");
const authContent = document.getElementById("auth-content");

function handleMenuClick(page) {
  updateTopbar(page);
  routeTo(page);
}

function showApp() {
  appContainer.classList.remove("hidden");
  authContainer.classList.add("hidden");
}

function showAuth() {
  appContainer.classList.add("hidden");
  authContainer.classList.remove("hidden");
}

window.initApp = function () {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      showApp();
      renderSidebar(handleMenuClick);
      renderTopbar("Dashboard");
      routeTo("Dashboard");
    } else {
      showAuth();
      renderLogin(authContent);
    }
  });
};

initApp();
