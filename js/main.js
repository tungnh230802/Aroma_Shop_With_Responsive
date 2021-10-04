const app = {
  productSile: function () {
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
        1119:{
          items:4,
        }
      },
    });
  },
  sellerSile: function () {
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
          items: 1,
        },
        767: {
          items: 2,
        },
        991: {
          items: 3,
        },
        1119:{
          items:4,
        }
      },
    });
  },
  stickyNavMenu: function () {
    let nav_offset_top = $(".main_menu").height() + 50;

    if ($(".main_menu").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll >= nav_offset_top) {
          $(".main_menu").addClass("navbar_fixed");
        } else {
          $(".main_menu").removeClass("navbar_fixed");
        }
      });
    }
  },
  handleEvents: function () {
    document.getElementById("nav_toggle").onclick = function () {
      click_Toggle();
    };

    let nav = document.querySelector(".header_area .navbar-nav");

    function click_Toggle() {
      if (nav.style.display == "flex") {
        nav.style.display = "none";
      } else {
        nav.style.display = "flex";
      }
    }
  },
  start: function () {
    this.productSile();
    this.sellerSile();
    this.stickyNavMenu();
    this.handleEvents();
  },
};

app.start();
