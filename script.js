// Rotating Circle Text
const text = " FRONTEND DEVELOPER • UI/UX DESIGNER • GRAPHIC ARTIST • ";
const circle = document.getElementById("circle");
if (circle) {
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.innerText = text[i];
    span.style.transform = `rotate(${i * (360 / text.length)}deg)`;
    circle.appendChild(span);
  }
}

// Particles.js Config
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 100 },
    "color": { "value": "#5eb8e1" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#8b5cf6",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": { "distance": 140, "line_linked": { "opacity": 0.8 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

// Testimonials Auto Slide
let current = 1;
const total = 3;
setInterval(() => {
  document.getElementById('s' + current).checked = false;
  current = current % total + 1;
  document.getElementById('s' + current).checked = true;
}, 3000);

// AOS Init
AOS.init({
  duration: 900,
  once: true
});

// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});


 const galleryWrapper = document.getElementById("galleryWrapper");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeModal = document.getElementById("closeModal");

    // click to open modal
    document.querySelectorAll(".gallery-card img").forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        galleryWrapper.style.animationPlayState = "paused"; // pause scroll
      });
    });

    // close modal
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      galleryWrapper.style.animationPlayState = "running"; // resume scroll
    });

    // close on outside click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        galleryWrapper.style.animationPlayState = "running";
      }
    });