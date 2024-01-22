const header = document.querySelector('[data-header="container"]');
const toggleBtn = header.querySelector('[data-header="toggle"]');
const body = document.body;
const menuLinks = header.querySelectorAll('[data-mneu="link"]');
const sprite = toggleBtn.querySelector('use');

const createOverlay = () => {
  if (!header.querySelector('.overlay')) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    header.append(overlay);
  } else {
    header.querySelector('.overlay').remove();
  }
};

const closeMenu = () => {
  header.classList.remove('opened');
  sprite.setAttribute('href', 'img/sprite.svg#menu-opened');
  body.classList.remove('scroll-lock');
  createOverlay();
  toggleBtn.classList.remove('header__toggle--dark');
};

const openMneu = () => {
  if (header) {
    toggleBtn.addEventListener('click', () => {
      header.classList.toggle('opened');

      if (header.classList.contains('opened')) {
        sprite.setAttribute('href', 'img/sprite.svg#menu-closed');
        toggleBtn.classList.add('header__toggle--dark');
      } else {
        sprite.setAttribute('href', 'img/sprite.svg#menu-opened');
        toggleBtn.classList.remove('header__toggle--dark');
      }

      body.classList.toggle('scroll-lock');

      createOverlay();
    });

    menuLinks.forEach((item) => {
      item.addEventListener('click', () => {
        if (header.classList.contains('opened')) {
          closeMenu();
        }
      });
    });
  }
};

export {openMneu};
