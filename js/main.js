/* ==========================================================================
   CMMCI Workshop — site behavior

   Deliberately small. Every page works fully without JavaScript: navigation,
   agenda, and all content are plain HTML. This file only adds conveniences.

   Bootstrap's bundle (loaded before this file) handles the mobile nav toggle.
   ========================================================================== */

(function () {
  'use strict';

  /* ---- Footer copyright year ------------------------------------------- */
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---- Active nav item -------------------------------------------------
     Each page also hard-codes aria-current="page" on its own nav link, so
     this is a no-JS-safe fallback that catches a page that forgot to. */
  var here = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.site-nav .nav-link').forEach(function (link) {
    var target = link.getAttribute('href');
    if (target === here && !link.hasAttribute('aria-current')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ---- External links --------------------------------------------------
     Anything pointing off-site opens in a new tab. The visible link text
     must already say so (see the .link-external markup) — opening a new tab
     without warning is a WCAG 3.2.5 problem, and JS can't fix that here. */
  document.querySelectorAll('a[href^="http"]').forEach(function (link) {
    if (link.hostname && link.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  /* ---- Countdown -------------------------------------------------------
     Fills any [data-countdown] element with days remaining until the
     workshop. Element ships with sensible static text as a fallback. */
  var WORKSHOP_START = new Date('2027-01-07T09:00:00-05:00');

  document.querySelectorAll('[data-countdown]').forEach(function (el) {
    var days = Math.ceil((WORKSHOP_START - new Date()) / 86400000);
    if (days > 0) {
      el.textContent = days.toLocaleString() + (days === 1 ? ' day to go' : ' days to go');
    } else if (days === 0) {
      el.textContent = 'Happening today';
    } else {
      el.textContent = 'Workshop concluded';
    }
  });
})();
