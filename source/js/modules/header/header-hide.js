let lastScroll = 0;
const header = document.querySelector('[data-header="container"]');

const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hidden');

const scrollPage = () => {
  window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide()) {
      //scroll down
      header.classList.add('hidden');
    } else if(scrollPosition() < lastScroll && containHide()){
      //scroll up
      header.classList.remove('hidden');
    }
    lastScroll = scrollPosition();
  });
};


export {scrollPage};
