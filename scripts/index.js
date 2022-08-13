const openToggleMenu = () => {
  const toggle = document.querySelectorAll('.toggle')
  const nav = document.querySelector('.nav')

  for(const element of toggle) {
    element.addEventListener('click', () => {
      nav.classList.toggle('show-toggle-menu')
    })
  }
}

const enableScrollReveal = () => {
  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
  })
  
  scrollReveal.reveal(
    `
    .home .title, .home .text,
    .home .home-image, .home .link,
    .main-news .home-image, .main-news .text,
    .main-news .title,
    .aside-news .text, .aside-news .title,
    .aside-news .title, .posts .more-news-image,
    .posts .text, .posts .title
    `,
  )
}

const enableArrowUpButton = () => {
  const arrowUpButton = document.querySelector('.icon-arrow-up-circle')
  window.addEventListener('scroll', () => {
    if(this.window.scrollY >= 700) {
      arrowUpButton.classList.add('show-btn')
    } else {
      arrowUpButton.classList.remove('show-btn')
    }
  })
}

openToggleMenu()
enableScrollReveal()
enableArrowUpButton()