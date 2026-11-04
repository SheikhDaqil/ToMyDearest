const envelope = document.getElementById("openEnvelope");
const letterSection = document.getElementById("letterSection");
const ending = document.getElementById("ending");
const tapNote = document.getElementById("tapNote");
const scrollNote = document.getElementById("scrollNote");
const music = document.getElementById("loveMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");

function updateMusicButton(isPlaying) {
  musicToggle.classList.toggle("playing", isPlaying);
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicLabel.textContent = isPlaying ? "Pause music" : "Play romantic music";
}

musicToggle.addEventListener("click", async () => {
  if (!music.paused) {
    music.pause();
    updateMusicButton(false);
    return;
  }
  musicLabel.textContent = "Loading music...";
  try {
    await music.play();
    updateMusicButton(true);
  } catch (error) {
    musicLabel.textContent = "Music unavailable. Check connection";
    console.error("Audio playback failed:", error);
  }
});

music.addEventListener("play", () => updateMusicButton(true));
music.addEventListener("pause", () => updateMusicButton(false));
music.addEventListener("error", () => {
  musicLabel.textContent = "Music unavailable. Check connection";
});

envelope.addEventListener("click", () => {
  if (envelope.classList.contains("open")) return;
  envelope.classList.add("open");
  envelope.setAttribute("aria-expanded", "true");
  tapNote.hidden = true;
  scrollNote.hidden = false;
  window.setTimeout(() => {
    letterSection.hidden = false;
    letterSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 650);
});

document.getElementById("showEnding").addEventListener("click", () => {
  ending.hidden = false;
  ending.scrollIntoView({ behavior: "smooth", block: "start" });
});
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
