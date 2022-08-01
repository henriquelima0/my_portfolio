/*SCROLL REVEAL */
ScrollReveal().reveal(".headline");
ScrollReveal().reveal(".punchline", { delay: 1000 });
ScrollReveal().reveal(".tagline", { delay: 500 });
/*NavBar*/

let btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type == "touchstart") event.preventDefault();
  let nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

var $doc = $("html, body");
$("a").click(function () {
  $doc.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
  return false;
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 2,
  loop: false,
  mousewheel: true,
  lazy: true,
  speed: 700,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 500 ? "vertical" : "horizontal";

  return direction;
}
