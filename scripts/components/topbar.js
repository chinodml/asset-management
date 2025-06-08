let topbarEl;

export function renderTopbar(initialTitle) {
  topbarEl = document.getElementById("topbar-container");
  topbarEl.className = "bg-[#f8f9fa] border-b border-gray-200 px-6 py-4 text-lg text-gray-800 font-semibold tracking-wide shadow-sm";
  topbarEl.textContent = initialTitle;
}

export function updateTopbar(newTitle) {
  if (topbarEl) topbarEl.textContent = newTitle;
}
