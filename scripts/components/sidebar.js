export function renderSidebar(onClick) {
  const container = document.getElementById("sidebar-container");
  container.className = "w-64 bg-white border-r border-gray-200 shadow-md";

  container.innerHTML = `
    <div class="p-5 text-xl font-bold text-[#c1121f] tracking-wide border-b border-gray-200">
      Fuwa Fuwa Admin
    </div>
    <nav id="sidebar" class="space-y-1 p-2"></nav>
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
      "sidebar-item cursor-pointer px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-[#ffe5b4] hover:text-[#b50000] transition-colors";

    div.onclick = () => {
      if (activeItem) {
        activeItem.classList.remove("bg-[#ffe5b4]", "text-[#b50000]", "font-semibold");
      }
      div.classList.add("bg-[#ffe5b4]", "text-[#b50000]", "font-semibold");
      activeItem = div;

      onClick(item);
    };

    sidebar.appendChild(div);

    // Set default active
    if (item === "Dashboard") {
      div.classList.add("bg-[#ffe5b4]", "text-[#b50000]", "font-semibold");
      activeItem = div;
    }
  });
}
