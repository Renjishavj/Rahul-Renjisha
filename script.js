// GALLERY LOAD MORE FUNCTIONALITY

const loadMoreBtn = document.getElementById("loadMoreBtn");

loadMoreBtn.addEventListener("click", function () {
  const hiddenImages = document.querySelectorAll(".gallery-item.hidden");

  hiddenImages.forEach(function (image) {
    image.classList.remove("hidden");
  });

  loadMoreBtn.style.display = "none";
});

// bubles

// FLOATING LOVE BUBBLES

const loveContainer = document.getElementById("love-bubbles");

const loveSymbols = ["♥", "♡", "❤"];

const loveColors = [
  "#b51e67", // Rose pink
  "#d7a54c", // Gold
  "#e8a2ba", // Soft pink
  "#a51d60", // Dark pink
];

function createLoveBubble() {
  if (!loveContainer) return;

  const bubble = document.createElement("span");

  bubble.classList.add("love-bubble");

  // Random heart
  bubble.textContent =
    loveSymbols[Math.floor(Math.random() * loveSymbols.length)];

  // Random position
  bubble.style.left = Math.random() * 100 + "%";

  // Random size
  bubble.style.fontSize = 10 + Math.random() * 14 + "px";

  // Random color
  bubble.style.color =
    loveColors[Math.floor(Math.random() * loveColors.length)];

  // Random animation duration
  const duration = 9 + Math.random() * 9;

  bubble.style.animationDuration = duration + "s";

  // Horizontal movement
  bubble.style.setProperty("--drift", Math.random() * 160 - 80 + "px");

  // Rotation
  bubble.style.setProperty("--rotation", Math.random() * 90 - 45 + "deg");

  // Transparency
  bubble.style.setProperty(
    "--bubble-opacity",
    (0.2 + Math.random() * 0.3).toString(),
  );

  loveContainer.appendChild(bubble);

  // Remove after animation
  bubble.addEventListener("animationend", () => {
    bubble.remove();
  });
}

// Create more hearts continuously
if (
  loveContainer &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  setInterval(() => {
    for (let i = 0; i < 5; i++) {
      createLoveBubble();
    }
  }, 600);
}

// Open the invitation and reveal the existing wedding website.
const invitationGate = document.getElementById("invitationGate");
const openInvitationButton = document.getElementById("openInvitation");

if (openInvitationButton && invitationGate) {
  openInvitationButton.addEventListener("click", () => {
    invitationGate.classList.add("invitation-gate--opening");
    document.body.classList.remove("invitation-locked");

    window.setTimeout(() => {
      invitationGate.remove();
      document.getElementById("home")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 850);
  });
}
