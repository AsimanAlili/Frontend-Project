$(".tab-h").click(function () {
  $(".tab-h").has(".active").removeClass("active");
  //   $(".tab-h").removeClass("active");
  $(this).addClass("active");
  let id = $(this).data("tab");
  $(".tab-content").fadeOut(100);
  $(id).fadeIn(100);
});

$(document).ready(() => {
  $(".tab-h.active").trigger("click");
  $(window).resize(function (e) {
    console.log($(window).width());
  });
});

function sendMessage() {
  fetch("https://api.3sual.az/api/task", {
    // Adding method type
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      name: "Bahruz",
      email: "bahruz.aydinli@gmail.com",
      message: "Test",
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }) // Converting to JSON
    .then((response) => response.json())
    // Displaying results to console
    .then((json) => console.log(json));
}
