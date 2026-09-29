import { projects } from "./projects-data.js";

function getProjectId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderMissingProject() {
  document.getElementById("project-title").textContent = "Project not found";
  document.getElementById("project-category").textContent = "";
  const desc = document.getElementById("project-description");
  if (desc) {
    desc.innerHTML = `<p>We couldn't find a project matching that link. <a href="index.html" style="color: var(--accent)">Return home</a>.</p>`;
  }
  const videoWrap = document.querySelector(".video-wrap");
  if (videoWrap) videoWrap.style.display = "none";
  const navBlock = document.querySelector(".project-nav");
  if (navBlock) navBlock.style.display = "none";
}

function setMetaRow(id, value) {
  const row = document.getElementById(id);
  if (!row) return;
  if (!value) {
    row.style.display = "none";
    return;
  }
  row.querySelector(".meta-value").textContent = value;
}

function wireVideo(project) {
  const video = document.getElementById("project-video");
  const fallback = document.getElementById("video-fallback");
  const fallbackPath = document.getElementById("video-fallback-path");

  fallbackPath.textContent = project.video.src;

  const source = document.createElement("source");
  source.src = project.video.src;
  source.type = "video/mp4";
  video.appendChild(source);

  function showFallback() {
    video.hidden = true;
    fallback.hidden = false;
  }

  // Errors on <source>/<video> don't bubble, so listen in the capture phase.
  video.addEventListener("error", showFallback, true);
  video.addEventListener(
    "stalled",
    () => {
      if (video.readyState === 0) showFallback();
    },
    true
  );

  video.load();
}

function renderNav(project) {
  const index = projects.findIndex((p) => p.id === project.id);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const prevLink = document.getElementById("prev-project");
  const nextLink = document.getElementById("next-project");

  prevLink.href = `project.html?id=${encodeURIComponent(prev.id)}`;
  prevLink.querySelector(".title").textContent = prev.title;

  nextLink.href = `project.html?id=${encodeURIComponent(next.id)}`;
  nextLink.querySelector(".title").textContent = next.title;
}

function renderProject() {
  const id = getProjectId();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    renderMissingProject();
    return;
  }

  document.title = `${project.title} — Ginga Edits`;
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-category").textContent = project.category;

  setMetaRow("meta-category", project.category);
  setMetaRow("meta-year", project.year);
  setMetaRow("meta-role", project.role);
  setMetaRow("meta-software", project.software);
  setMetaRow("meta-client", project.client);

  document.getElementById("desc-objective").textContent = project.objective;
  document.getElementById("desc-approach").textContent = project.approach;
  document.getElementById("desc-storytelling").textContent = project.storytelling;
  document.getElementById("desc-retention").textContent = project.retention;
  document.getElementById("desc-outcome").textContent = project.outcome;

  wireVideo(project);
  renderNav(project);
}

document.addEventListener("DOMContentLoaded", renderProject);
