export default function hamburger() {
  const body = document.body;
  const burgerMenu = document.getElementsByClassName('b-menu')[0];
  const burgerContain = document.getElementsByClassName('b-container')[0];
  const burgerNav = document.getElementsByClassName('b-nav')[0];

  const toggleClasses = function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    }, false);
  };

  burgerMenu.addEventListener('click', toggleClasses);
  burgerNav.addEventListener('click', toggleClasses);
};
