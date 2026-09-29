import { projects } from "./projects-data.js";

function renderWorkList() {
  const list = document.getElementById("work-list");
  if (!list) return;

  list.innerHTML = "";

  projects.forEach((project, i) => {
    const row = document.createElement("a");
    row.className = "work-row";
    row.href = `project.html?id=${encodeURIComponent(project.id)}`;

    row.innerHTML = `
      <span class="work-index">${String(i + 1).padStart(2, "0")}</span>
      <span class="work-title">${project.title}</span>
      <span class="work-meta">${project.category} — ${project.year}</span>
      <span class="work-arrow">&rarr;</span>
    `;

    list.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", renderWorkList);
