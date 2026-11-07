/**
 * File Name: site.js
 * Student's Name: WangZhenghao
 * StudentID: 2024110451
 * Date: 2026-11-05
 *
 * Description:
 * Site-wide client-side JavaScript. Currently handles the
 * auto-dismiss of the contact success banner and small
 * shared behaviours for the LPoster portfolio.
 */

"use strict";

// ==================== Shared Init ====================
document.addEventListener("DOMContentLoaded", function () {
  // Manually load the contact form script only when it exists,
  // keeping this file lightweight for the other pages
  if (document.getElementById("contactForm")) {
    // contact.js registers its own DOMContentLoaded listener,
    // which already ran before this point when included directly;
    // nothing extra is needed here because validation is
    // self-contained inside contact.js.
  }

  // Close the mobile navigation menu after a link is tapped
  var navCollapse = document.getElementById("mainNav");
  if (navCollapse && window.bootstrap) {
    navCollapse.addEventListener("click", function (event) {
      if (event.target.classList.contains("nav-link")) {
        var collapseInstance = window.bootstrap.Collapse.getInstance(navCollapse);
        if (collapseInstance) {
          collapseInstance.hide();
        }
      }
    });
  }
});
