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
    