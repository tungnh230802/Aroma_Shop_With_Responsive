$(document).ready(function () {
  $("#product_slide .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 3,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 3,
      },
    },
  });

  $("#sellers_slide .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<button><i class='bi bi-arrow-left'></i></button>",
      "<button><i class='bi bi-arrow-right'></i></button>",
    ],
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      767: {
        items: 3,
      },
      991: {
        items: 4,
      },
    },
  });

  // sticky navigation menu
  let nav_offset_top = $('.main_menu').height() + 50;

    function navbarFixed() {
        if ($('.main_menu').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.main_menu').addClass('navbar_fixed');
                } else {
                    $('.main_menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();
    
    document.getElementById("nav_toggle").onclick = function() {
      click_Toggle();
    }

    let nav = document.querySelector('.header_area .navbar-nav')

    function click_Toggle() {
      if(nav.style.display == "flex"){
        nav.style.display = "none";
      }else{
        nav.style.display = "flex";
      }
    }
});
