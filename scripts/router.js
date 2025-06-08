import { renderDashboard } from "../pages/dashboard.js";

export function routeTo(pageName) {
  const main = document.getElementById("main-content");

  switch (pageName) {
    case "Dashboard":
      renderDashboard(main);
      break;
    default:
      main.innerHTML = `<div class="text-gray-400 text-center text-lg">"${pageName}" 'di pa po tapos.</div>`;
  }
}
