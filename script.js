// Target the hamburger icon and menu links
const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelector(".menu-links");

// Add an event listener for the click event
hamburgerIcon.addEventListener("click", () => {
  menuLinks.classList.toggle("active"); // Toggle the 'active' class to show/hide menu
});
