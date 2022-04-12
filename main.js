/* Alterna o botão de menu e sair */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Sai do menu ao clicar em algum link */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Swiper */

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  autoplay: {
    delay: 2500
  },
  loop: true,

  breakpoints: {
    412: {
      slidesPerView: 3,
      autoplay: false,
      spaceBetween: 30
    }
  }
})
