/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add
  if (this.scrollY >= 50) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
  modalBtns = document.querySelectorAll('.services__button'),
  modalClose = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    modal(i)
  })
})

modalClose.forEach(mc => {
  mc.addEventListener('click', () => {
    modalViews.forEach(mv => {
      mv.classList.remove('active-modal')
    })
  })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card'
  },
  animation: {
    duration: 300
  }
})

/* Link active work */
const linkwork = document.querySelectorAll('.work__item')

function activeWork() {
  linkwork.forEach(i => i.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkwork.forEach(i => i.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper('.testimonial__container', {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48
    }
  }
})
