document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.from(document.querySelectorAll('.navbar-burger'));

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });

  // Add a click event on the document to close the menu when clicking outside
  document.addEventListener('click', (event) => {
    const activeBurger = document.querySelector('.navbar-burger.is-active');
    if (!activeBurger) {
      return;
    }

    const targetMenu = document.getElementById(activeBurger.dataset.target);

    // Check if the click is outside the active menu and its burger
    if (!targetMenu.contains(event.target) && !activeBurger.contains(event.target)) {
      activeBurger.classList.remove('is-active');
      targetMenu.classList.remove('is-active');
    }
  });

});