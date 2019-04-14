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

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});