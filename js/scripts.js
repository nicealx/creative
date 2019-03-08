$('.header-bottom-scroll').click(function(){
  $('html, body').animate({ scrollTop: $('.feature').offset().top }, 500);
});


function initMap() {
  var coordinates = {lat: 53.355062, lng: 83.769559},
  
      map = new google.maps.Map(document.getElementById('map'), {
          center: coordinates
      });
}