document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Toggle (Always active) ---
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click from bubbling to document
      navMenu.classList.toggle('active');
    });
  }

  // --- Dropdown Menu Toggle (Mobile-only logic) ---
  const dropdownToggle = document.querySelector('.dropdown-menu-toggle');
  const dropdownMenu = document.getElementById('nav-dropdown-menu');
  // --- FIX: Use new ID from your HTML ---
  const dropdownSpan = document.getElementById('nav-olympiad');

  if (dropdownToggle && dropdownMenu && dropdownSpan) {

    const toggleDropdown = (event) => {
      // Only run this click logic if the mobile menu toggle is visible
      // (This check also prevents desktop clicks)
      if (menuToggle && window.getComputedStyle(menuToggle).display !== 'none') {
        event.stopPropagation(); // Prevent click from bubbling to document
        dropdownMenu.classList.toggle('active');
      }
    };

    // Attach the click listener to the span
    dropdownSpan.addEventListener('click', toggleDropdown);
  }

  // --- Close menus when clicking elsewhere (Mobile-only logic) ---
  document.addEventListener('click', (event) => {
    // Only run if mobile menu is visible
    if (menuToggle && window.getComputedStyle(menuToggle).display !== 'none') {

      // Close main nav menu if click is outside
      if (navMenu && navMenu.classList.contains('active') && !navMenu.contains(event.target) && event.target !== menuToggle) {
        navMenu.classList.remove('active');
      }

      // Close dropdown menu if click is outside
      if (dropdownMenu && dropdownMenu.classList.contains('active') && !dropdownSpan.contains(event.target)) {
        dropdownMenu.classList.remove('active');
      }
    }
  });


  // --- NEW: Close all menus on window resize ---
  window.addEventListener('resize', () => {
    if (navMenu) {
      navMenu.classList.remove('active');
    }
    if (dropdownMenu) {
      dropdownMenu.classList.remove('active');
    }
  });

});
