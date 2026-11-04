const envelope = document.getElementById("openEnvelope");
const letterSection = document.getElementById("letterSection");
const memories = document.getElementById("memories");
const ending = document.getElementById("ending");
const tapNote = document.getElementById("tapNote");
const scrollNote = document.getElementById("scrollNote");
const music = document.getElementById("loveMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");

envelope.addEventListener("click", () => {
  if (envelope.classList.contains("open")) return;
  envelope.classList.add("open");
  envelope.setAttribute("aria-expanded", "true");
  tapNote.hidden = true;
  scrollNote.hidden = false;
  // Browsers require a deliberate click before audio can play.
  music.play().then(() => setMusicState(true)).catch(() => {
    musicLabel.textContent = "Tap for romantic music";
  });
  window.setTimeout(() => {
    letterSection.hidden = false;
    letterSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 650);
});

function setMusicState(isPlaying) {
  musicToggle.classList.toggle("playing", isPlaying);
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicLabel.textContent = isPlaying ? "Pause music" : "Play our soundtrack";
}

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try { await music.play(); setMusicState(true); }
    catch { musicLabel.textContent = "Music unavailable — check connection"; }
  } else {
    music.pause();
    setMusicState(false);
  }
});

document.getElementById("showMemories").addEventListener("click", () => {
  memories.hidden = false;
  memories.scrollIntoView({ behavior: "smooth", block: "start" });
});
document.getElementById("showEnding").addEventListener("click", () => {
  ending.hidden = false;
  ending.scrollIntoView({ behavior: "smooth", block: "start" });
});
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
music.addEventListener("pause", () => setMusicState(false));
music.addEventListener("play", () => setMusicState(true));
