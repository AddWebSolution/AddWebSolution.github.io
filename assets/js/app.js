document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  const loader = document.querySelector('#loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        loader.remove();
      }, 2000);
    });
  }

  function aos_init() {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});