export const listNumeration = () => {
  const hasGrantElement = () => document.querySelector('[data-list="grant"]');

  if (hasGrantElement) {
    const container = document.querySelector('[data-list="grant"]');
    const listCounts = container.querySelectorAll('[data-list="count"]');

    listCounts.forEach((item, index) => {
      item.textContent = String(index + 1);
    });
  }
};
