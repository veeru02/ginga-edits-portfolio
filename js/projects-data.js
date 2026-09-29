/**
 * PROJECT DATA
 * ------------------------------------------------------------------
 * This is the only file you need to edit to add, remove, or update
 * a project.
 *
 * To swap or add a video:
 *   1. Place the .mp4 file inside /videos
 *   2. Point "video.src" at that file, e.g. "videos/my-file.mp4"
 *
 * Fields:
 *   id        — used in the URL: project.html?id=this-value (must be unique)
 *   title     — project title
 *   category  — short category label shown on the card and project page
 *   year      — production year
 *   role      — your role on the project
 *   software  — tools used, comma separated
 *   client    — optional, leave as "" if none
 *   objective, approach, storytelling, retention, outcome
 *             — the five description blocks on the project page
 *   video.src — path to the local mp4 file
 * ------------------------------------------------------------------
 */

export const projects = [
  {
    id: "creator-breakdown",
    title: "Creator Breakdown",
    category: "YouTube / Commentary",
    year: "2025",
    role: "Video Editor",
    software: "Premiere Pro, After Effects",
    client: "",
    objective:
      "Turn a long, unstructured screen-recorded commentary session into a tight, watchable YouTube episode that holds attention from the cold open to the final cut.",
    approach:
      "Cut the raw recording down around the strongest reactions and arguments, rebuilt the intro as a cold open pulled from the middle of the episode, and used cutaways and on-screen captions to keep pacing brisk without losing the host's voice.",
    storytelling:
      "Structured the episode around a single question the host answers by the end, so every segment either raises the stakes of that question or moves toward resolving it.",
    retention:
      "Used pattern interrupts every 20–30 seconds — zooms, sound design hits, and B-roll inserts — placed at natural energy dips identified during the first assembly cut.",
    outcome:
      "A single continuous edit ready for upload, with a modular structure that makes it easy to pull shorts from the strongest segments.",
    video: { type: "mp4", src: "videos/creator-breakdown.mp4" },
  },
  {
    id: "founder-story",
    title: "Founder Story",
    category: "Documentary / Brand",
    year: "2025",
    role: "Video Editor & Script Writer",
    software: "Premiere Pro, DaVinci Resolve",
    client: "",
    objective:
      "Shape a founder interview and supporting b-roll into a short documentary-style piece that explains why the company exists, not just what it does.",
    approach:
      "Wrote a tightened interview script from the raw transcript, restructured answers out of chronological order around a clearer emotional arc, and paired quieter verite footage with the more reflective parts of the interview.",
    storytelling:
      "Opened on a moment of doubt rather than a mission statement, letting the founder's motivation emerge through specific memories instead of stated values.",
    retention:
      "Kept every interview segment under the point where energy naturally drops, cutting to b-roll or a scene change before that happens rather than after.",
    outcome:
      "A short-form documentary piece with a clear beginning, turning point, and resolution, built to work both as a standalone film and cut down for social.",
    video: { type: "mp4", src: "videos/founder-story.mp4" },
  },
  {
    id: "business-short",
    title: "Business Short",
    category: "Business / Corporate",
    year: "2025",
    role: "Video Editor",
    software: "Premiere Pro, After Effects",
    client: "",
    objective:
      "Compress a product overview into a short, clean corporate video that a sales team can send directly to prospects.",
    approach:
      "Cut for clarity over polish — trimmed filler from spoken sections, aligned on-screen text with the exact moment each point is made, and kept motion graphics restrained so they support the message instead of competing with it.",
    storytelling:
      "Organized the video around a problem/solution structure familiar to a business audience, so the value proposition is clear within the first few seconds.",
    retention:
      "Kept individual shots and talking segments short, and used simple graphic overlays to reinforce key numbers and claims as they're spoken rather than after.",
    outcome:
      "A concise, professional cut sized for both a website embed and direct outreach, with no section requiring context from outside the video itself.",
    video: { type: "mp4", src: "videos/business-short.mp4" },
  },
  {
    id: "explainer-film",
    title: "Explainer Film",
    category: "Explainer",
    year: "2024",
    role: "Video Editor & Script Writer",
    software: "Premiere Pro, After Effects",
    client: "",
    objective:
      "Explain a multi-step process clearly to viewers with no prior context, without the video feeling like a lecture.",
    approach:
      "Wrote the script first as a sequence of single ideas, then edited picture to match — one visual beat per idea, with motion graphics built specifically to illustrate the step being described rather than as generic decoration.",
    storytelling:
      "Used a consistent visual language for each stage of the process, so viewers can track progress through the explanation without needing a spoken recap.",
    retention:
      "Kept sentences and visuals in lockstep, cutting away from any single graphic before it's been on screen long enough to feel static.",
    outcome:
      "A self-contained explainer that requires no prior knowledge of the subject and holds up to a rewatch when a viewer needs to reference a specific step.",
    video: { type: "mp4", src: "videos/explainer-film.mp4" },
  },
  {
    id: "retention-cut",
    title: "Retention Cut",
    category: "YouTube / Long-form",
    year: "2024",
    role: "Video Editor",
    software: "Premiere Pro, After Effects",
    client: "",
    objective:
      "Edit a long-form YouTube video built specifically to hold viewers through a full 15+ minute runtime rather than losing them in the middle third.",
    approach:
      "Restructured the raw footage around an open loop introduced in the first minute, paced the middle section with shorter, faster cuts than the opening, and reserved the strongest visual moment for the section where drop-off is typically highest.",
    storytelling:
      "Treated the video as chapters with their own mini-arcs, each closing on a small payoff that pulls the viewer into the next section.",
    retention:
      "Built the pacing around where attention is statistically hardest to hold — tightening cuts and adding visual variety through the middle of the runtime rather than only at the start.",
    outcome:
      "A long-form edit structured to sustain watch time across the full runtime, with a chapter structure that also supports YouTube timestamps.",
    video: { type: "mp4", src: "videos/retention-cut.mp4" },
  },
];
