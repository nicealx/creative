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

$('.multiple-items').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
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