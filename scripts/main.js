import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { renderLogin } from "../pages/login.js";
import { renderSidebar } from "./components/sidebar.js";
import { renderTopbar, updateTopbar } from "./components/topbar.js";
import { routeTo } from "./router.js";

window.initApp = function () {
  const main = document.getElementById("main-content");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      renderSidebar(handleMenuClick);
      renderTopbar("Dashboard");
      routeTo("Dashboard");
    } else {
      main.innerHTML = ""; // Clear loading message
      renderLogin(main);
    }
  });
};

function handleMenuClick(page) {
  updateTopbar(page);
  routeTo(page);
}

initApp();
