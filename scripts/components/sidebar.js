export function renderSidebar(onClick) {
  const container = document.getElementById("sidebar-container");
  container.className = "w-72 bg-orange-50 border-r  shadow-md";

  container.innerHTML = `
    <div class="flex items-center justify-start gap-3 px-5 py-4 text-lg font-bold text-orange-900 tracking-wide">
    <img src="asset/fuwafuwa-logo.png" alt="Fuwa Fuwa Logo" class="w-12 h-12" />
    <span>Administrator's Panel</span>
  </div>
  <nav id="sidebar" class="space-y-1 p-4"></nav>

  `;

  const menuItems = [
    "Dashboard",
    "Assets",
    "Users",
    "Departments",
    "Asset Requests",
    "Maintenance",
    "Reports",
    "Audit Trail",
    "Settings"
  ];

  const sidebar = container.querySelector("#sidebar");

  let activeItem = null;

  menuItems.forEach(item => {
    const div = document.createElement("div");
    div.textContent = item;
    div.className =
      "sidebar-item cursor-pointer px-4 py-2 rounded-md text-sm text-orange-900 hover:bg-orange-100 hover:text-orange-700 transition-colors";

    div.onclick = () => {
      if (activeItem) {
        activeItem.classList.remove("bg-orange-200", "text-[#4b2e2e]", "font-semibold");
      }
      div.classList.add("bg-orange-200", "text-[#4b2e2e]", "font-semibold"); // Dark brown text on active
      activeItem = div;

      onClick(item);
    };

    sidebar.appendChild(div);

    // Set default active
    if (item === "Dashboard") {
      div.classList.add("bg-orange-200", "text-[#4b2e2e]", "font-semibold");
      activeItem = div;
    }
  });
}
