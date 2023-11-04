const logoLink = document.querySelector('.logo');
const dropdownContent = document.querySelector('.dropdown-content');
let dropdownIsOpen = false;

// Function to open the dropdown
function openDropdown() {
  dropdownContent.style.display = 'block';
  dropdownIsOpen = true;
}

// Function to close the dropdown
function closeDropdown() {
  dropdownContent.style.display = 'none';
  dropdownIsOpen = false;
}

// Toggle the dropdown when the logo is clicked
logoLink.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the link from navigating
  if (dropdownIsOpen) {
    closeDropdown();
  } else {
    openDropdown();
  }
});