'use strict';

// Function to toggle active class
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// Sidebar toggle functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

// Page navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const targetPage = this.innerText.toLowerCase().trim();
    console.log("Clicked on:", targetPage);

    // Remove active class from all pages and nav links
    pages.forEach((page) => page.classList.remove("active"));
    navigationLinks.forEach((nav) => nav.classList.remove("active"));

    // Add active class to the clicked link and corresponding section
    this.classList.add("active");
    const targetSection = document.querySelector(`[data-page='${targetPage}']`);
    
    if (targetSection) {
      targetSection.classList.add("active");
      console.log("Activated section:", targetPage);
    } else {
      console.error("Target section not found:", targetPage);
    }

    window.scrollTo(0, 0);
  });
});

// Set default active page on load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Setting default active page...");
  
  pages.forEach((page) => page.classList.remove("active"));
  document.querySelector("[data-page='education']").classList.add("active");

  navigationLinks.forEach((nav) => nav.classList.remove("active"));
  document.querySelector(".navbar-link[data-nav-link]:first-child").classList.add("active");
});
