import { renderSidebar } from "./components/sidebar.js";
import { renderTopbar, updateTopbar } from "./components/topbar.js";
import { routeTo } from "./router.js";

renderSidebar(handleMenuClick);
renderTopbar("Dashboard");
routeTo("Dashboard");

function handleMenuClick(page) {
  updateTopbar(page);
  routeTo(page);
}
