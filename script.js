// Typing effect
const typingText = document.getElementById('typingText');

const phrases = [
  'Computer Engineering Student',
  'Tech Enthusiast',
  'AI Explorer',
  'Problem Solver',
  'Video Editor'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  if (!typingText) return;

  const current = phrases[phraseIndex];

  if (!isDeleting) {
    typingText.textContent = current.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    typingText.textContent = current.substring(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      charIndex = 0;
    }
  }

  setTimeout(type, isDeleting ? 60 : 90);
}

document.addEventListener('DOMContentLoaded', () => {
  type();
});

// Contact success message
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("successMessage");

  if (form && message) {
    form.addEventListener("submit", () => {
      message.style.display = "block";
      setTimeout(() => {
        message.style.display = "none";
      }, 4000);
    });
  }
});
const spotlight = document.querySelector(".spotlight");

if (spotlight) {
  spotlight.addEventListener("mousemove", (e) => {
    const items = spotlight.querySelectorAll(".spotlight-item");
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    items.forEach(item => {
      item.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  });

  spotlight.addEventListener("mouseleave", () => {
    const items = spotlight.querySelectorAll(".spotlight-item");
    items.forEach(item => {
      item.style.transform = "translate3d(0, 0, 0)";
    });
  });
}

