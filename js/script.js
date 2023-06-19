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

