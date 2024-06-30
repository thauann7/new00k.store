$(".header__burger-scry").click(function () {
    $("body").toggleClass("hidden");
    $(this).toggleClass("active");
  });
  
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      150,
      "linear"
    );
    $(".header__burger-scry").removeClass("active");
    $("body").removeClass("hidden");
  });
  
  setInterval(function () {
    let imgs = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
    var rotating_img = document.querySelector("#rotating_img");
    var current_img = rotating_img.src.split("/").pop();
    var current_img_number = current_img.split(".")[0];
    if (current_img_number == imgs.length) {
      var next_img_number = 1;
    } else {
      var next_img_number = parseInt(current_img_number) + 1;
    }
    rotating_img.style.opacity = 0;
    setTimeout(function () {
      rotating_img.src = "imagensinicio/" + imgs[next_img_number - 1];
      rotating_img.style.opacity = 1;
    }, 300);
  }, 2000);
  
  AOS.init({ once: "true" });
  
  let swiperOpts = {
      slidesPerView: 1,
      spaceBetween: 0,
      initialSlide: 0,
      autoHeight: true,
      navigation: {
        nextEl: ".roadmap__slider__next",
        prevEl: ".roadmap__slider__prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        998: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    },
    swiper = new Swiper(".roadmap__swiper", swiperOpts);
  
  let destroy_slider = false;
  
  $(document).ready(function () {
    if ($(window).width() <= 768 && !destroy_slider) {
      swiper.destroy();
      destroy_slider = true;
    } else {
      if (destroy_slider) {
        swiper = new Swiper(".roadmap__swiper", swiperOpts);
        destroy_slider = false;
      }
    }
  });
  
  $(window).resize(function () {
    if ($(window).width() <= 768 && !destroy_slider) {
      swiper.destroy();
      destroy_slider = true;
    } else {
      if (destroy_slider) {
        swiper = new Swiper(".roadmap__swiper", swiperOpts);
        destroy_slider = false;
      }
    }
  });
  
  const banner_parallax = document.querySelectorAll(".banner__parallax");
  
  let y = 0,
    x = 0,
    endX = 0,
    endY = 0;
  
  onmousemove = (e) => {
    endX = innerWidth / 2 - e.x;
    endY = innerHeight / 2 - e.y;
  };
  
  function parallax() {
    x += (endX - x) / 20;
    y += (endY - y) / 20;
    banner_parallax.forEach((item) => {
      item.style.transform = `translate(${-x / 30}px, ${-y / 30}px)`;
    });
    requestAnimationFrame(parallax);
  }
  
  requestAnimationFrame(parallax);
  