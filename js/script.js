const menu_open = document.querySelector('.menu-open')
const menu_close = document.querySelector('.menu-close')
const mob_nav = document.querySelector('.mob-nav')

menu_open.addEventListener('click', () => {
  mob_nav.classList.toggle('open')
})

menu_close.addEventListener('click', () => {
  mob_nav.classList.toggle('open')
})