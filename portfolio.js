function showSideBar() {
    document.getElementById('sidebar').style.display = 'flex';
}
    
function hideSideBar() {
    document.getElementById('sidebar').style.display = 'none';
}

const words = [" FrontEnd Specialist", " Aspiring Fullstack Developer", " Python Programmer", " Java Programmer", " ML Model Builder"];
let wordIndex = 0, txt = '', isDeleting = false;
const textEl = document.getElementById('animated-text');

function type() {
    const fullText = words[wordIndex % words.length];
    txt = isDeleting ? fullText.substring(0, txt.length - 1) : fullText.substring(0, txt.length + 1);
    textEl.textContent = txt;
    let speed = isDeleting ? 80 : 150;
    if (!isDeleting && txt === fullText) {
        speed = 1000; isDeleting = true;
    } else if (isDeleting && txt === '') {
        isDeleting = false; wordIndex++; speed = 500;
    }
    setTimeout(type, speed);
}
type();

const particles = document.getElementById("particles");
for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particle.style.animationDuration = `${5 + Math.random() * 5}s`;
    particles.appendChild(particle);
}

document.addEventListener("DOMContentLoaded", () => {
const slides = document.querySelectorAll(".slider-img");

  slides.forEach(slide => {
    slide.addEventListener("click", () => {
      slides.forEach(s => s.classList.remove("active"));
      slide.classList.add("active");
    });
    });
    });