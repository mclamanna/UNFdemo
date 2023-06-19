// JavaScript load navbar
window.addEventListener('DOMContentLoaded', () => {
  const navbarContainer = document.getElementById('sidebarContainer');

  // Fetch the navbar.html content
  fetch('sidebar.html')
    .then(response => response.text())
    .then(html => {
      // Insert the navbar HTML into the navbarContainer
      navbarContainer.innerHTML = html;
    })
    .catch(error => console.error('Error fetching navbar:', error));
});
