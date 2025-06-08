

export function renderDashboard(container) {
  container.innerHTML = `
    <h2 class="text-2xl font-semibold text-gray-800 mb-6 tracking-wide">
      Dashboard
    </h2>

    <!-- Top stat cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      ${createStatCard("Total Assets", "342", "bg-orange-100", "")}
      ${createStatCard("Pending Requests", "17", "bg-yellow-100", "")}
      ${createStatCard("Under Maintenance", "5", "bg-red-100", "")}
      ${createStatCard("Total Users", "89", "bg-gray-100", "")}
    </div>

    <!-- Middle charts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      ${createBox("Asset Distribution (placeholder)", " Chart will go here")}
      ${createBox("Maintenance Status (placeholder)", " Chart or Pie will go here")}
    </div>

    <!-- Recent activity -->
    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h3 class="text-lg font-medium mb-2 text-gray-700">Recent Activity</h3>
      <ul class="text-sm text-gray-600 space-y-2">
        <li> Printer assigned to Accounting</li>
        <li> Router marked as under maintenance</li>
        <li> Asset request submitted by James T.</li>
        <li> New user added: Maria Lopez</li>
      </ul>
    </div>
  `;
}

function createStatCard(title, value, bgColor, icon) {
  return `
    <div class="${bgColor} rounded-md p-4 shadow-sm border border-gray-200">
      <div class="text-sm text-gray-600 mb-1">${title}</div>
      <div class="flex items-center justify-between">
        <div class="text-2xl font-semibold text-gray-800">${value}</div>
        <div class="text-3xl">${icon}</div>
      </div>
    </div>
  `;
}

function createBox(title, placeholderText) {
  return `
    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div class="text-md font-medium mb-3 text-gray-700">${title}</div>
      <div class="text-gray-400 text-sm">${placeholderText}</div>
    </div>
  `;
}
