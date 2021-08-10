$(".slider").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 4,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
      },
    },
    {
      breakpoint: 924,
      settings: {
        dots: true,
        infinite: true,
        lazyLoad: "ondemand",

        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: true,
        infinite: true,

        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".price-slider").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 4,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
      },
    },
    {
      breakpoint: 924,
      settings: {
        dots: true,
        infinite: true,
        lazyLoad: "ondemand",

        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: true,
        infinite: true,

        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
//
$(document).ready(function () {
  $(".testimonials-slider").owlCarousel({
    loop: true,
    items: 3,
    dots: true,
    margin: 30,
    responsive: {
      0: { items: 1 },

      1200: {
        items: 3,
      },
    },
  });
});
var inputs = document.getElementsByClassName("input");
function SendMessage(e) {
  e.preventDefault();
  let isSubmited = true;
  for (let input of inputs) {
    if (!input.value.trim()) {
      input.nextElementSibling.classList.remove("d-none");
      isSubmited = false;
    }
  }
  if (!isSubmited) {
    return;
  }
  toastr.success("Mesajınız müvəffəqiyyətlə göndərildi!!");
  for (let input of inputs) {
    input.value = "";
  }
}
for (let input of inputs) {
  input.onkeyup = function () {
    if (!input.value) {
      input.nextElementSibling.classList.remove("d-none");
    } else {
      input.nextElementSibling.classList.add("d-none");
    }
  };
}
