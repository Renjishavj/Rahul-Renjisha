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

/* =====================================
   MAIN PAGE - RANDOM FLOATING LOVE BUBBLES
===================================== */


/* RANDOM FLOATING LOVE BUBBLES */

const loveContainer = document.getElementById("love-bubbles");

const loveSymbols = ["♥", "♡", "❤"];

const loveColors = [
    "#b51e67",
    "#d7a54c",
    "#e8a2ba",
    "#a51d60"
];

function createLoveBubble() {
    if (!loveContainer) return;

    const bubble = document.createElement("span");
    bubble.classList.add("love-bubble");

    bubble.textContent =
        loveSymbols[Math.floor(Math.random() * loveSymbols.length)];

    // Random position anywhere on screen
    bubble.style.left = Math.random() * 95 + "%";
    bubble.style.top = Math.random() * 95 + "%";

    // Random size and colour
    bubble.style.fontSize = (10 + Math.random() * 18) + "px";

    bubble.style.color =
        loveColors[Math.floor(Math.random() * loveColors.length)];

    // Random animation speed
    const duration = 7 + Math.random() * 8;
    bubble.style.animationDuration = duration + "s";

    // Random movement in every direction
    bubble.style.setProperty("--move-x", (Math.random() * 300 - 150) + "px");
    bubble.style.setProperty("--move-y", (Math.random() * 300 - 150) + "px");

    bubble.style.setProperty(
        "--rotation",
        (Math.random() * 180 - 90) + "deg"
    );

    bubble.style.setProperty(
        "--bubble-opacity",
        0.2 + Math.random() * 0.4
    );

    loveContainer.appendChild(bubble);

    bubble.addEventListener("animationend", () => {
        bubble.remove();
    }, { once: true });
}

// Generate bubbles across the page
if (
    loveContainer &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
    // Initial bubbles
    for (let i = 0; i < 8; i++) {
        setTimeout(createLoveBubble, i * 250);
    }

    // Gradually add new bubbles
    setInterval(createLoveBubble, 900);
}









// Open invitation with cinematic transition

const invitationGate = document.getElementById("invitationGate");
const openInvitationButton = document.getElementById("openInvitation");

if (openInvitationButton && invitationGate) {

    openInvitationButton.addEventListener("click", () => {

        // Start main page reveal
        document.body.classList.add("main-page-revealing");

        // Start invitation closing animation
        invitationGate.classList.add("invitation-gate--opening");

        // Unlock scrolling
        document.body.classList.remove("invitation-locked");

        // Remove opening screen after transition
        window.setTimeout(() => {

            invitationGate.remove();

            document.getElementById("home")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 1100);

    });

}




/* =====================================
   GLOWING FLOATING LOVE HEARTS
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const gate = document.getElementById("invitationGate");
    const container = document.getElementById("gateLoveBubbles");

    if (!gate || !container) return;

    if (window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches) return;

    // Romantic colour palette
    const colors = [
        {
            main: "#FF6FAD",
            glow: "rgba(255, 70, 150, 0.8)"
        },
        {
            main: "#FF9BC5",
            glow: "rgba(255, 120, 180, 0.8)"
        },
        {
            main: "#E8C477",
            glow: "rgba(232, 196, 119, 0.7)"
        },
        {
            main: "#F5DDAA",
            glow: "rgba(245, 221, 170, 0.7)"
        }
    ];

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function addMovement(element, size, duration, color) {

        element.style.setProperty(
            "--start-x",
            random(0, 100) + "%"
        );

        element.style.setProperty("--size", size + "px");
        element.style.setProperty("--duration", duration + "s");

        element.style.setProperty(
            "--heart-color",
            color.main
        );

        element.style.setProperty(
            "--heart-glow",
            color.glow
        );

        element.style.setProperty(
            "--opacity",
            random(0.35, 0.85)
        );

        element.style.setProperty(
            "--drift-one",
            random(-65, 65) + "px"
        );

        element.style.setProperty(
            "--drift-two",
            random(-90, 90) + "px"
        );

        element.style.setProperty(
            "--drift-three",
            random(-130, 130) + "px"
        );

        container.appendChild(element);

        element.addEventListener("animationend", () => {
            element.remove();
        }, { once: true });
    }

    // Create outline or solid hearts
    function createHeart() {

        if (
            !gate.isConnected ||
            gate.classList.contains("is-opening")
        ) return;

        const heart = document.createElement("span");

        const outline = Math.random() > 0.35;

        heart.className = outline
            ? "love-effect love-outline"
            : "love-effect love-solid";

        heart.textContent = outline ? "♡" : "♥";

        const size = outline
            ? random(28, 65)
            : random(17, 38);

        const duration = random(12, 23);

        const color = colors[
            Math.floor(Math.random() * colors.length)
        ];

        addMovement(heart, size, duration, color);
    }

    // Create small glowing particles
    function createParticle() {

        if (
            !gate.isConnected ||
            gate.classList.contains("is-opening")
        ) return;

        const particle = document.createElement("span");

        particle.className = "love-particle";

        const size = random(2, 7);
        const duration = random(9, 17);

        const color = colors[
            Math.floor(Math.random() * colors.length)
        ];

        addMovement(particle, size, duration, color);
    }

    // Initial hearts
    for (let i = 0; i < 12; i++) {
        setTimeout(createHeart, i * 350);
    }

    // Initial background particles
    for (let i = 0; i < 35; i++) {
        setTimeout(createParticle, i * 100);
    }

    // Continuously generate hearts
    const heartInterval = setInterval(() => {

        if (gate.classList.contains("is-opening")) {
            clearInterval(heartInterval);
            return;
        }

        createHeart();

    }, 850);

    // Continuously generate particles
    const particleInterval = setInterval(() => {

        if (gate.classList.contains("is-opening")) {
            clearInterval(particleInterval);
            return;
        }

        createParticle();

    }, 220);

});



/* =====================================
   WEDDING COUNTDOWN
   31 JANUARY 2027 - 10:05 AM IST
===================================== */

const weddingDate = new Date(
    "2027-01-31T10:05:00+05:30"
).getTime();

const daysElement = document.getElementById("openingDays");
const hoursElement = document.getElementById("openingHours");
const minutesElement = document.getElementById("openingMinutes");
const secondsElement = document.getElementById("openingSeconds");

function updateWeddingCountdown() {

    const now = Date.now();
    const difference = weddingDate - now;

    if (difference <= 0) {
        daysElement.textContent = "000";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

   daysElement.textContent = String(days);
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

// Update immediately
updateWeddingCountdown();

// Update every second
setInterval(updateWeddingCountdown, 1000);

