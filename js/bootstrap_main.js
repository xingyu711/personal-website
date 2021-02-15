/**
 * The following code is from Bootstrap template
 * Template Name: Personal - v4.0.0
 */
(function () {
  'use strict';

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function () {
    select('#navbar').classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    'click',
    '#navbar .nav-link',
    function (e) {
      let section = select(this.hash);
      if (section) {
        e.preventDefault();

        let navbar = select('#navbar');

        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile');
          let navbarToggle = select('.mobile-nav-toggle');
          navbarToggle.classList.toggle('bi-list');
          navbarToggle.classList.toggle('bi-x');
        }
      }
    },
    true
  );

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    // eslint-disable-next-line no-undef
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function () {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      },
    });
  }

  /**
   * Gallery isotope and filter
   */
  window.addEventListener('load', () => {
    let galleryContainer = select('.gallery-container');
    if (galleryContainer) {
      // eslint-disable-next-line no-undef
      let galleryIsotope = new Isotope(galleryContainer, {
        itemSelector: '.gallery-item',
        layoutMode: 'fitRows',
      });

      let galleryFilters = select('#gallery-flters li', true);

      on(
        'click',
        '#gallery-flters li',
        function (e) {
          e.preventDefault();
          galleryFilters.forEach(function (el) {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');

          galleryIsotope.arrange({
            filter: this.getAttribute('data-filter'),
          });
        },
        true
      );
    }
  });

  /**
   * Initiate gallery lightbox
   */
  // eslint-disable-next-line no-undef
  GLightbox({
    selector: '.gallery-lightbox',
  });
})();
