
  const answerList = document.getElementById("answerList");

var search = document.getElementById("search");
let answers = [];
+
search.addEventListener("keyup", (e) => {
  if (document.getElementById("searchBox").value.length > 1) {
    answerList.classList.remove("d-none");
  } else {
    answerList.classList.add("d-none");
  }
  console.log(document.getElementById("searchBox").value.length);
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = answers.filter((character) => {
    return (
      character.azerbaijani.toLowerCase().startsWith(searchString) ||
      character.espanol.toLowerCase().startsWith(searchString)
    );
  });
  displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("https://api.3sual.az/api/task");
    answers = await res.json();
    displayCharacters(answers);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
            <li class="character">
            <div>
                <p> ${character.espanol}</p>
                <p>${character.azerbaijani}</p>
            </div>
            </li>
        `;
    })
    .join(" ");
  answerList.innerHTML = htmlString;
 
};

loadCharacters();

var wordOfFav1 = new Audio(
  "./assets/mp3/sound1.mp3"
);
function wordOfFav() {
  wordOfFav1.play();
}

var wordOfDay1 = new Audio(
  "./assets/mp3/sound2.mp3"
);
function wordOfDay() {
  wordOfDay1.play();
  document.g
}
var elements = document.getElementsByClassName("nav-list");
function clickElement(index) {
  for (let i = 0; i < elements.length; i++) {
    if (index === i) {
      for (let j = 0; j < elements.length; j++) {
        if (elements[j].classList.contains("active-nav") || j !== index) {
          elements[j].classList.remove("active-nav");
          elements[i].classList.add("active-nav");
        }
      }
    }
  }
}