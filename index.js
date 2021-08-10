$(document).ready(function () {
  //   var cards = document.querySelectorAll(".card");
  //   for (let i = 0; i < cards.length; i++) {
  //     cards[i].style.border = "5px solid red";
  //   }
  $(".card").css("border", "5px red solid");
  $(".card").css("background-color", "orange");
});

window.addEventListener("DOMContentLoaded", function () {});

// document.createElement("p");
// innerHTML = "<td>" + number + "</td>"
$("<p>"); // creates a new <p> element with no content
$("<p>Hello!</p>"); // creates a new <p> element with content
$(`<p class='greet'>Hello!</p>`); // creates a new <p> with content and class

$(".card").mouseover(function (e) {
  console.log(e);
  $(this).css("background-color", "yellow");
});
$(".card").mouseout(function () {
  $(this).css("background-color", "orange");
});

$(document).keydown(function () {
  console.log("Hello");
});

$(document).scroll(function (e) {
  console.log(e);
});
