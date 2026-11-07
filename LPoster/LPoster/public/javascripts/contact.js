/**
 * File Name: contact.js
 * Student's Name: WangZhenghao
 * StudentID: 2024110451
 * Date: 2026-11-05
 *
 * Description:
 * Client-side validation and fake-submit handling for the
 * Contact Me page form. Validates each required field
 * (First Name, Last Name, Contact Number, Email, Message)
 * and shows a success banner when everything is valid.
 */

"use strict";

// ==================== Run Once the DOM is Ready ====================
document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contactForm");
  var successBanner = document.getElementById("formSuccess");

  // Do nothing if this is not the contact page
  if (!contactForm) {
    return;
  }

  // ==================== Submit Handler ====================
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (isFormValid(contactForm)) {
      // Show the success banner and reset the form fields
      successBanner.classList.remove("d-none");
      contactForm.reset();
      contactForm.classList.remove("was-validated");
    } else {
      // Hide the banner and let Bootstrap highlight the invalid fields
      successBanner.classList.add("d-none");
      contactForm.classList.add("was-validated");
    }
  });

  // ==================== Validation Helpers ====================

  /**
   * Validate every field of the form using HTML5 rules plus
   * the custom phone-number check.
   */
  function isFormValid(form) {
    var fields = form.querySelectorAll("input, textarea");
    var allValid = true;

    fields.forEach(function (field) {
      if (!validateField(field)) {
        allValid = false;
      }
    });

    return allValid;
  }

  /**
   * Validate a single field. Returns true when the value passes
   * HTML5 validity and the custom rules below.
   */
  function validateField(field) {
    var valid = field.checkValidity();

    // Custom rule: phone number must contain 7 to 15 digits
    if (valid && field.id === "contactNumber") {
      var digits = field.value.replace(/\D/g, "");
      valid = digits.length >= 7 && digits.length <= 15;
    }

    // Custom rule: message must be at least 10 characters long
    if (valid && field.id === "message") {
      valid = field.value.trim().length >= 10;
    }

    field.classList.toggle("is-invalid", !valid);
    return valid;
  }

  // Re-validate each field as the user types to clear errors quickly
  contactForm.querySelectorAll("input, textarea").forEach(function (field) {
    field.addEventListener("input", function () {
      if (contactForm.classList.contains("was-validated")) {
        validateField(field);
      }
    });
  });
});
