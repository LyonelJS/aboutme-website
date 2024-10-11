const menu = document.getElementById('menu');
const dropdown = document.getElementById('dropdown');


menu.addEventListener('click', () => { /**adds active to the class of the menu **/
    menu.classList.toggle('active');
    dropdown.style.display = (dropdown.style.display === 'flex') ? 'none' : 'flex';
});

const navLinks = document.querySelectorAll('.dropdown a'); /**finds whether the current page is the link's address**/
navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
      link.parentElement.classList.add('active');
    }
  });