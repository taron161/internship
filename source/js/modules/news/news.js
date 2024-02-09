export const onClickTab = () => {
  const tabs = document.querySelectorAll('[data-btn="tab"]');
  if (document.querySelectorAll('[data-btn="tab"]').length > 0) {
    tabs.forEach((item) => {
      item.addEventListener('click', () => {
        removeCurrentClass(tabs);
        item.classList.add('current');
      });
    });
  }
};

function removeCurrentClass (el) {
  el.forEach((item) => {
    if(item.classList.contains('current')) {
      item.classList.remove('current');
    }
  });
}

export const setSlidesNumbers = () => {
  const hasNumberElement = () => document.querySelector('[data-pagination="news"] .swiper-pagination-bullet');

  if (hasNumberElement) {
    const listCounts = document.querySelectorAll('[data-pagination="news"] .swiper-pagination-bullet');

    listCounts.forEach((item, index) => {
      item.textContent = String(index + 1);
    });
  }
};
