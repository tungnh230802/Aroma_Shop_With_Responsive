const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);

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
        1119: {
          items: 4,
        },
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
        1119: {
          items: 4,
        },
      },
    });
  },
  stickyNavMenu: function () {
    let nav_offset_top = $(".main_menu").height() + 50;

    if ($(".main_menu").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".main_menu").addClass("navbar_fixed");
        } else {
          $(".main_menu").removeClass("navbar_fixed");
        }
      });
    }
  },
  handleEvents: function () {
    // sự kiến click để mở navbar ở mobile
    query("#nav_toggle").onclick = function () {
      click_Toggle();
    };

    let nav = query(".header_area .navbar-nav");

    function click_Toggle() {
      if (nav.style.display == "flex") {
        nav.style.display = "none";
      } else {
        nav.style.display = "flex";
      }
    }

    // sự kiện select ở shopcategory
    const niceSelects = queryAll(".nice-select");
    niceSelects.forEach((niceSelect) => {
      niceSelect.onclick = function () {
        // if (query(".nice-select.open")) {
        //   niceSelect.classList.remove("open");
        // } else {
        //   niceSelect.classList.add("open");
        // }
        if (this.classList.contains("open")) {
          this.classList.remove("open");
        } else {
          this.classList.add("open");
        }
      };

      const options = queryAll(".default .option");
      options.forEach((option, index) => {
        option.onclick = function () {
          query(".default .option.selected.focus").classList.remove(
            "selected",
            "focus"
          );
          this.classList.add("selected", "focus");

          const selectSpan = query(".default .nice-select span");
          selectSpan.innerText = query(".default .option.focus").innerText;
        };
      });

      const options2 = queryAll(".show .option");
      options2.forEach((option, index) => {
        option.onclick = function () {
          query(".show .option.selected.focus").classList.remove(
            "selected",
            "focus"
          );
          this.classList.add("selected", "focus");

          const selectSpan = query(".show .nice-select span");
          selectSpan.innerText = query(".show .option.focus").innerText;
        };
      });
    });

    // sự kiện ấn thêm/giảm hàng product-detail
    const btn_increase = query(".product_count .increase");
    const btn_decrease = query(".product_count .decrease");
    const sst = query(".product_count #stt").value;

    btn_increase.onclick = function () {
      stt.value++;
    };

    btn_decrease.onclick = function () {
      if (stt.value > 0) stt.value--;
    };

    // sự lý tab-pane product description
    const navLinks = queryAll(".nav-item .nav-link");
    const tabPanes = queryAll(".tab_content .tab-pane");

    navLinks.forEach((nav, index) => {
      const tab = tabPanes[index];
      nav.onclick = function (e) {
        e.preventDefault();
        query(".nav-link.active").classList.remove("active");
        query(".tab-pane.active").classList.remove("active");

        nav.classList.add("active");
        tab.classList.add("active");
      };
    });
  },
  start: function () {
    this.productSile();
    this.sellerSile();
    this.stickyNavMenu();
    this.handleEvents();
  },
};

app.start();
