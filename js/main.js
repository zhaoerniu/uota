var owl = $('.owl-carousel');
  owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
  });
  $('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
  })

$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

(function() {
  var header = document.querySelector("nav");

  if(window.location.hash) {
    header.classList.add("headroom--unpinned");
  }

  var headroom = new Headroom(header, {
      tolerance: {
        down : 10,
        up : 20
      },
      offset : 52
  });
  headroom.init();

}());