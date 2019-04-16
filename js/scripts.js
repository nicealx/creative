// $('.header-bottom-scroll').click(function(){
//   $('html, body').animate({ scrollTop: $('.feature').offset().top }, 500);
// });

const scrollArrows = document.querySelectorAll('a[href*="#"]');

for(let scrollArrow of scrollArrows){
    scrollArrow.addEventListener('click', (e) => {
      e.preventDefault();

      const id = scrollArrow.getAttribute('href');

      document.querySelector('' + id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
    });
}



$('.hamburger-btn').on('click', () => {
  $('.hamburger').toggleClass('hamburger_active');
  $('.header-top-menu').toggleClass('header-top-menu_active');
  $('.mobile-menu__link').removeClass('header-top-menu_active');
});

const header = document.querySelector('#header'),
      toUp = document.querySelector('.toUp');

function up() {
  toUp.addEventListener('click', () => {
    header.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

up();


$('.multiple-items').slick({
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});