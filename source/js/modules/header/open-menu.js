const header = document.querySelector('[data-header="container"]');
const menu = header.querySelector('[data-header="menu"]');
const toggleBtn = header.querySelector('[data-header="toggle"]');
const body = document.body;
const menuLinks = header.querySelectorAll('[data-mneu="link"]');
const sprite = toggleBtn.querySelector('use');
const tabButtons = header.querySelectorAll('[data-menu="tab"]');

function createOverlay () {
  if (!header.querySelector('.overlay')) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    header.append(overlay);

    overlay.addEventListener('click', () => {
      toggleClasses();
      closeMenu();
    });
  }
}

function removeOvelay () {
  if (header.querySelector('.overlay')) {
    header.querySelector('.overlay').remove();
  }
}

function closeMenu () {
  sprite.setAttribute('href', '__spritemap#sprite-menu');
  body.classList.remove('scroll-lock');
  removeOvelay();
}

function openMenu () {
  sprite.setAttribute('href', '__spritemap#sprite-cross');
  body.classList.add('scroll-lock');
  createOverlay();
}

function toggleClasses () {
  menu.classList.toggle('opened');
  header.classList.toggle('is-active');
}

const clickToggleButton = () => {
  if (header) {
    toggleBtn.addEventListener('click', () => {
      toggleClasses();

      if (menu.classList.contains('opened')) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    menuLinks.forEach((item) => {
      item.addEventListener('click', () => {
        menuLinks.forEach((element) => element.classList.remove('current'));
        item.classList.add('current');
        closeMenu();
        toggleClasses();
      });
    });

    tabButtons.forEach((item) => {
      item.addEventListener('click', () => {
        item.classList.toggle('is-active');
      });
    });
  }
};

export {clickToggleButton};
