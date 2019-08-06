const navigation = document.querySelector('.navigation-sidebar');
const navigationBtn = document.querySelectorAll('.open-close-toggle');

const buttonUp = document.querySelector('.button-up');

navigationBtn.forEach(function(button) {
  button.addEventListener('click', toggleMenu);
});

function toggleMenu() {
  navigation.classList.toggle('nav-visible');
}

function scrollToTop(duration) {
  if(duration <= 0) {
    return;
  }
  const difference = 0 - document.documentElement.scrollTop;
  const perTick = difference / duration * 10;

  setTimeout(() => {
    document.documentElement.scrollTop = document.documentElement.scrollTop + perTick;
    if (document.documentElement.scrollTip === 0) {
      return;
    }
    scrollToTop(duration - 10);
  }, 10);
}

buttonUp.addEventListener('click', () => scrollToTop(400));
