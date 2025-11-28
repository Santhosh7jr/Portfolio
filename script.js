// Mobile Navbar Toggle
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("show");
  menuIcon.classList.toggle("bx-x");
});

// Close navbar on link click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
    menuIcon.classList.remove("bx-x");
  });
});

// Active navbar link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (scrollY >= top && scrollY < top + section.offsetHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Typing Animation
const typingSpan = document.querySelector(".typing-text");
const roles = [
  "Computer Science Student",
  "Frontend Developer",
  "Java & DSA Enthusiast",
  "Python Programmer"
];

let roleIndex = 0;
let charIndex = 0;

function typing() {
  if (charIndex < roles[roleIndex].length) {
    typingSpan.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typing, 90);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    roleIndex++;
    if (roleIndex >= roles.length) roleIndex = 0;
    setTimeout(typing, 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typing();

  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();
});
