(function () {
  'use strict';

  var form = document.getElementById('consultForm');
  var message = document.getElementById('formMessage');
  var topButton = document.getElementById('backToTop');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
      form.classList.add('was-validated');
      if (message) {
        message.classList.remove('d-none');
        message.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  function toggleTopButton() {
    if (!topButton) return;
    if (window.scrollY > 450) topButton.classList.add('show');
    else topButton.classList.remove('show');
  }

  window.addEventListener('scroll', toggleTopButton);
  toggleTopButton();

  if (topButton) {
    topButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Close the mobile navbar after selecting a section link.
  var navLinks = document.querySelectorAll('#mainNav .nav-link, #mainNav .btn');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.jQuery && window.innerWidth < 992) {
        window.jQuery('#mainNav').collapse('hide');
      }
    });
  });
}());
