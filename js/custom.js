//smoothScroll
$('a').smoothScroll();

//mobile navbar hide after click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
})

// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

//sweet alert 
  document.querySelector('.sweet-1').onclick = function(){
        swal("thanks!", "You have submitted!", "success");
      };

//Page top scroll jq code
$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })
});