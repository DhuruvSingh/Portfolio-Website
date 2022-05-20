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
  name: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  image: './Image/project-bg-img.png',
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  link: 'https://dhuruvsingh.github.io/Portfolio-Website/',
},
{
  name: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  image: './Image/project-bg-img.png',
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  link: 'https://dhuruvsingh.github.io/Portfolio-Website/',
},
{
  name: 'Website Protfolio',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  image: './Image/project-bg-img.png',
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  link: 'https://dhuruvsingh.github.io/Portfolio-Website/',
},
{
  name: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  image: './Image/project-bg-img.png',
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  link: 'https://dhuruvsingh.github.io/Portfolio-Website/',
},
{
  name: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  image: './Image/project-bg-img.png',
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  link: 'https://dhuruvsingh.github.io/Portfolio-Website/',
},
{
  name: 'Website Protfolio',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  image: './Image/project-bg-img.png',
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  link: 'https://dhuruvsingh.github.io/Portfolio-Website/',
},
];

openModalButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.currentTarget.classList[0] === 'project-1-btn') {
      document.getElementById('modal').innerHTML = `<div class="modal-header">
      <div class="title">${projects[0].name}</div>
      <button data-close-button class="close-button">&times;</button>
  </div>
  <div class="modal-body">
      <div class="language-tags-model language-tags">
          <ul class="tags-model">
              <li class="model-tag tag-1">${projects[0].technologies[0]}</li>
              <li class="model-tag tag-2">${projects[0].technologies[1]}</li>
              <li class="model-tag-b tag-3">bootstrap</li>
              <li class="model-tag tag-4">${projects[0].technologies[2]}</li>
          </ul>
      </div>
      <div class="model-main-project">
          <div class="model-Img-Placeholder">
            <img class="pimage" src="${projects[0].image}"/>
          </div>
          <div class="model-project-left">
              <div>
                  <p class="model-supporting-text">${projects[0].description}</p>
              </div>
              <div class="model-btn">
                  <button class="model-button-p-main" type="button">See Project <img
                          src="./Icons/Icon-see-live.png" alt=""></button>
                  <button class="model-button-p-main" type="button">See Source <img
                          src="./Icons/github.png" alt=""></button>
              </div>
          </div>
      </div>
  </div>`;
    } else if (event.currentTarget.classList[0] === 'project-2-btn') {
      document.getElementById('modal').innerHTML = `<div class="modal-header">
      <div class="title">${projects[1].name}</div>
      <button data-close-button class="close-button">&times;</button>
  </div>
  <div class="modal-body">
      <div class="language-tags-model language-tags">
          <ul class="tags-model">
              <li class="model-tag tag-1">${projects[1].technologies[0]}</li>
              <li class="model-tag tag-2">${projects[1].technologies[1]}</li>
              <li class="model-tag-b tag-3">bootstrap</li>
              <li class="model-tag tag-4">${projects[1].technologies[2]}</li>
          </ul>
      </div>
      <div class="model-main-project">
          <div class="model-Img-Placeholder">
            <img class="pimage" src="${projects[1].image}"/>
          </div>
          <div class="model-project-left">
              <div>
                  <p class="model-supporting-text">${projects[1].description}</p>
              </div>
              <div class="model-btn">
                  <button class="model-button-p-main" type="button">See Project <img
                          src="./Icons/Icon-see-live.png" alt=""></button>
                  <button class="model-button-p-main" type="button">See Source <img
                          src="./Icons/github.png" alt=""></button>
              </div>
          </div>
      </div>
  </div>`;
    } else if (event.currentTarget.classList[0] === 'project-3-btn') {
      document.getElementById('modal').innerHTML = `<div class="modal-header">
      <div class="title">${projects[2].name}</div>
      <button data-close-button class="close-button">&times;</button>
  </div>
  <div class="modal-body">
      <div class="language-tags-model language-tags">
          <ul class="tags-model">
              <li class="model-tag tag-1">${projects[2].technologies[0]}</li>
              <li class="model-tag tag-2">${projects[2].technologies[1]}</li>
              <li class="model-tag-b tag-3">bootstrap</li>
              <li class="model-tag tag-4">${projects[2].technologies[2]}</li>
          </ul>
      </div>
      <div class="model-main-project">
          <div class="model-Img-Placeholder">
            <img class="pimage" src="${projects[2].image}"/>
          </div>
          <div class="model-project-left">
              <div>
                  <p class="model-supporting-text">${projects[2].description}</p>
              </div>
              <div class="model-btn">
                  <button class="model-button-p-main" type="button">See Project <img
                          src="./Icons/Icon-see-live.png" alt=""></button>
                  <button class="model-button-p-main" type="button">See Source <img
                          src="./Icons/github.png" alt=""></button>
              </div>
          </div>
      </div>
  </div>`;
    } else if (event.currentTarget.classList[0] === 'project-4-btn') {
      document.getElementById('modal').innerHTML = `<div class="modal-header">
      <div class="title">${projects[3].name}</div>
      <button data-close-button class="close-button">&times;</button>
  </div>
  <div class="modal-body">
      <div class="language-tags-model language-tags">
          <ul class="tags-model">
              <li class="model-tag tag-1">${projects[3].technologies[0]}</li>
              <li class="model-tag tag-2">${projects[3].technologies[1]}</li>
              <li class="model-tag-b tag-3">bootstrap</li>
              <li class="model-tag tag-4">${projects[3].technologies[2]}</li>
          </ul>
      </div>
      <div class="model-main-project">
          <div class="model-Img-Placeholder">
            <img class="pimage" src="${projects[3].image}"/>
          </div>
          <div class="model-project-left">
              <div>
                  <p class="model-supporting-text">${projects[3].description}</p>
              </div>
              <div class="model-btn">
                  <button class="model-button-p-main" type="button">See Project <img
                          src="./Icons/Icon-see-live.png" alt=""></button>
                  <button class="model-button-p-main" type="button">See Source <img
                          src="./Icons/github.png" alt=""></button>
              </div>
          </div>
      </div>
  </div>`;
    } else if (event.currentTarget.classList[0] === 'project-5-btn') {
      document.getElementById('modal').innerHTML = `<div class="modal-header">
      <div class="title">${projects[4].name}</div>
      <button data-close-button class="close-button">&times;</button>
  </div>
  <div class="modal-body">
      <div class="language-tags-model language-tags">
          <ul class="tags-model">
              <li class="model-tag tag-1">${projects[4].technologies[0]}</li>
              <li class="model-tag tag-2">${projects[4].technologies[1]}</li>
              <li class="model-tag-b tag-3">bootstrap</li>
              <li class="model-tag tag-4">${projects[4].technologies[2]}</li>
          </ul>
      </div>
      <div class="model-main-project">
          <div class="model-Img-Placeholder">
            <img class="pimage" src="${projects[4].image}"/>
          </div>
          <div class="model-project-left">
              <div>
                  <p class="model-supporting-text">${projects[4].description}</p>
              </div>
              <div class="model-btn">
                  <button class="model-button-p-main" type="button">See Project <img
                          src="./Icons/Icon-see-live.png" alt=""></button>
                  <button class="model-button-p-main" type="button">See Source <img
                          src="./Icons/github.png" alt=""></button>
              </div>
          </div>
      </div>
  </div>`;
    } else if (event.currentTarget.classList[0] === 'project-6-btn') {
      document.getElementById('modal').innerHTML = `<div class="modal-header">
      <div class="title">${projects[5].name}</div>
      <button data-close-button class="close-button">&times;</button>
  </div>
  <div class="modal-body">
      <div class="language-tags-model language-tags">
          <ul class="tags-model">
              <li class="model-tag tag-1">${projects[5].technologies[0]}</li>
              <li class="model-tag tag-2">${projects[5].technologies[1]}</li>
              <li class="model-tag-b tag-3">bootstrap</li>
              <li class="model-tag tag-4">${projects[5].technologies[2]}</li>
          </ul>
      </div>
      <div class="model-main-project">
          <div class="model-Img-Placeholder">
            <img class="pimage" src="${projects[5].image}"/>
          </div>
          <div class="model-project-left">
              <div>
                  <p class="model-supporting-text">${projects[5].description}</p>
              </div>
              <div class="model-btn">
                  <button class="model-button-p-main" type="button">See Project <img
                          src="./Icons/Icon-see-live.png" alt=""></button>
                  <button class="model-button-p-main" type="button">See Source <img
                          src="./Icons/github.png" alt=""></button>
              </div>
          </div>
      </div>
  </div>`;
    } else {
      document.getElementById('modal').innerHTML = `<div class="modal-header">
      <div class="title">Keeping track of hundreds of components website</div>
      <button data-close-button class="close-button">&times;</button>
  </div>
  <div class="modal-body">
      <div class="language-tags-model language-tags">
          <ul class="tags-model">
              <li class="model-tag tag-1">css</li>
              <li class="model-tag tag-2">html</li>
              <li class="model-tag-b tag-3">bootstrap</li>
              <li class="model-tag tag-4">Ruby</li>
          </ul>
      </div>
      <div class="model-main-project">
          <div class="model-Img-Placeholder">
          </div>
          <div class="model-project-left">
              <div>
                  <p class="model-supporting-text">A daily selection of privately personalized
                      reads; no accounts or
                      sign-ups
                      required. has been the industry's
                      standard dummy text ever since the 1500s, when an unknown printer took a
                      standard dummy
                      text.</p>
              </div>
              <div class="model-btn">
                  <button class="model-button-p-main" type="button">See Project <img
                          src="./Icons/Icon-see-live.png" alt=""></button>
                  <button class="model-button-p-main" type="button">See Source <img
                          src="./Icons/github.png" alt=""></button>
              </div>
          </div>
      </div>
  </div>`;
    }
  });
});

// Contact form validation

const submitButton = document.getElementById('send-button');
submitButton.addEventListener('click', formSubmit);

function formSubmit(event) {
  const userName = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('msg').value;

  if (email !== email.toLowerCase()) {
    document.getElementById('error').classList.add('show-error');
  } else {
    const userData = JSON.stringify({
      userName,
      email,
      message,
    });
    window.localStorage.setItem('userData', userData);
    document.getElementById('contact').reset();
  }
}