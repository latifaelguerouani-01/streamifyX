window.addEventListener("pageshow", () => {

  const menu = document.querySelector('#menu-bars');
  const navbar = document.querySelector('.navbar');

  if (menu && navbar) {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    menu.onclick = () => {
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
    };
  }

  const homeSlider = document.querySelector(".home-slider");
  if (homeSlider) {
    if (homeSlider.swiper) homeSlider.swiper.destroy(true, true);

    new Swiper(".home-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
    });
  }

  document.querySelectorAll(
    ".anime-slider, .action-slider, .child-slider, .family-slider"
  ).forEach(slider => {

    if (slider.swiper) slider.swiper.destroy(true, true);

    new Swiper(slider, {
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }
    });
  });

});
window.openMovie = function (movieName) { window.location.href = "download.html?movie=" + movieName; };
