const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

menu.addEventListener('click', toggleMenu);
hamburger.addEventListener('click', toggleMenu);

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

const projects = [{
  name: "Profesional Art Printing Data",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  image: "./Image/project-bg-img.png",
  technologies: ["HTML", "JavaScript", "Ruby"],
  link: "https://dhuruvsingh.github.io/Portfolio-Website/",
},
{
  name: "Data Dashboard Healthcare",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  image: "./Image/project-bg-img.png",
  technologies: ["HTML", "JavaScript", "Ruby"],
  link: "https://dhuruvsingh.github.io/Portfolio-Website/",
},
{
  name: "Website Protfolio",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  image: "./Image/project-bg-img.png",
  technologies: ["HTML", "JavaScript", "Ruby"],
  link: "https://dhuruvsingh.github.io/Portfolio-Website/",
},
{
  name: "Profesional Art Printing Data",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  image: "./Image/project-bg-img.png",
  technologies: ["HTML", "JavaScript", "Ruby"],
  link: "https://dhuruvsingh.github.io/Portfolio-Website/",
},
{
  name: "Data Dashboard Healthcare",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  image: "./Image/project-bg-img.png",
  technologies: ["HTML", "JavaScript", "Ruby"],
  link: "https://dhuruvsingh.github.io/Portfolio-Website/",
},
{
  name: "Website Protfolio",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  image: "./Image/project-bg-img.png",
  technologies: ["HTML", "JavaScript", "Ruby"],
  link: "https://dhuruvsingh.github.io/Portfolio-Website/",
},]

const projectOne = document.querySelectorAll('.project-1-btn');
const projectTwo = document.querySelectorAll('.project-2-btn');
const projectThree = document.querySelectorAll('.project-3-btn');
const projectFour = document.querySelectorAll('.project-4-btn');
const projectFive = document.querySelectorAll('.project-5-btn');
const projectSix = document.querySelectorAll('.project-6-btn');
