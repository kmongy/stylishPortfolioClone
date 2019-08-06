const navigation = document.querySelector('.navigation-sidebar');
const navigationBtn = document.querySelectorAll('.open-close-toggle');

navigationBtn.forEach(function(button) {
  button.addEventListener('click', toggleMenu);
});

function toggleMenu() {
  navigation.classList.toggle('nav-visible');
}