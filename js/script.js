$(function() {
  
  function removeOver() {
    $('.owl-stage .center').find('.new-overly').removeClass('overly');
    $('.owl-stage .center').siblings().find('.new-overly').addClass('overly');
  }
  var owl = $('.main-news');
  owl.owlCarousel({
   items:3,
   margin:10,
   center:true,
   loop:true,
   onInitialized: removeOver,
   onDragged  : removeOver,
   onChanged:removeOver,
  //  slideTransition:'fade',
   responsive:{
    0:{ items:1 },
    600:{ items:2 },
    1000:{ items:3 }
  }
  });
  $('.recent-comments').owlCarousel({
    items:1
  })
  // owl.on('next.owl.carousel', removeOver);
  $('.prev').click(function() { owl.trigger('prev.owl.carousel') });
  $('.next').click(function() { owl.trigger('next.owl.carousel') });
// Document Ready
}); 