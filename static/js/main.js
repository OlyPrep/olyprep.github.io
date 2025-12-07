document.addEventListener('DOMContentLoaded', () => {
  const navbarOverlay = document.getElementById('navbar-overlay');

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
      if (navbarOverlay) {
        navbarOverlay.classList.toggle('is-active');
      }
    });
  });

  // Add a click event on the document to close the menu when clicking outside
  document.addEventListener('click', (event) => {
    const activeBurgers = document.querySelectorAll('.navbar-burger.is-active');
    activeBurgers.forEach(activeBurger => {
      const targetMenu = document.getElementById(activeBurger.dataset.target);

      // Check if the click is outside the active menu and its burger
      if (targetMenu && !targetMenu.contains(event.target) && !activeBurger.contains(event.target)) {
        activeBurger.classList.remove('is-active');
        targetMenu.classList.remove('is-active');
        if (navbarOverlay) {
          navbarOverlay.classList.remove('is-active');
        }
      }
    });
  });

  // Floating sidebar
  const sidebar = document.getElementById('sidebar');
  const sidebarOpenButton = document.getElementById('sidebar-open-button');
  const sidebarOverlay = document.getElementById('sidebar-overlay');

  if (sidebar && sidebarOpenButton && sidebarOverlay) {
    sidebarOpenButton.addEventListener('click', () => {
      sidebar.classList.add('is-active');
      sidebarOverlay.classList.add('is-active');
    });

    sidebarOverlay.addEventListener('click', () => {
      sidebar.classList.remove('is-active');
      sidebarOverlay.classList.remove('is-active');
    });

    const sidebarCloseButton = document.getElementById('sidebar-close-button');
    if (sidebarCloseButton) {
      sidebarCloseButton.addEventListener('click', () => {
        sidebar.classList.remove('is-active');
        sidebarOverlay.classList.remove('is-active');
      });
    }

    // Close sidebar when a TOC link is clicked
    const tocLinks = sidebar.querySelectorAll('.sidebar-toc a');
    tocLinks.forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('is-active');
        sidebarOverlay.classList.remove('is-active');
      });
    });
  };

  // Table wrapping for accessibility
  const tables = document.querySelectorAll('.content table');
  tables.forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
    table.classList.add('wrapped-scrollable-table');
  });
});
