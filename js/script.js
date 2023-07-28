const dropdown = document.querySelectorAll(".dropdown");
const dropdownToggle = document.querySelectorAll(".dropdown-toggle");
const dropdownMenu = document.querySelectorAll(".dropdown-menu");
const showClass = "show";

function toggleDropdown() {
  const thisDropdown = this;
  thisDropdown.classList.add(showClass);
  thisDropdown.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "true");
  thisDropdown.querySelector(".dropdown-menu").classList.add(showClass);
}

function hideDropdown() {
  const thisDropdown = this;
  thisDropdown.classList.remove(showClass);
  thisDropdown.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
  thisDropdown.querySelector(".dropdown-menu").classList.remove(showClass);
}

function handleWindowSize() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    dropdown.forEach((item) => {
      item.addEventListener("mouseenter", toggleDropdown);
      item.addEventListener("mouseleave", hideDropdown);
    });
  } else {
    dropdown.forEach((item) => {
      item.removeEventListener("mouseenter", toggleDropdown);
      item.removeEventListener("mouseleave", hideDropdown);
    });
  }
}

window.addEventListener("load", handleWindowSize);
window.addEventListener("resize", handleWindowSize);

// Get all elements with the class 'toggleButton'
const toggleButtons = document.querySelectorAll('.toggleButton');

// Loop through each toggle button and add the click event listener
toggleButtons.forEach(toggleButton => {
  const iconElement = toggleButton.querySelector('i');

  // Add click event listener to the button
  toggleButton.addEventListener('click', () => {
    // Toggle the 'fa-circle-plus' and 'fa-circle-minus' classes
    iconElement.classList.toggle('fa-circle-plus');
    iconElement.classList.toggle('fa-circle-minus');
  });
});

