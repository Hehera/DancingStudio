var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  items: 3,
  margin: 30,
  dotsEach: true,
  dots: true,
  nav: true,
});
// Go to the next item
$(".direction--icon--next").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".direction--icon--prev").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});
$(".owl-dot").click(function () {
  owl.trigger("to.owl.carousel", [$(this).index(), 300]);
});
// Slicker
$(".coaches_row ").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow:
    "<img src='./../img/Directionsandcoahes/arrow-next.svg' class='next' alt='1'>",
  nextArrow:
    "<img src='./../img/Directionsandcoahes/arrow-prev.svg' class='prev' alt='2'>",
});

// FAQ
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// Scroll 
$(document).ready(function () {
  $("a.nav-link").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
});
    

