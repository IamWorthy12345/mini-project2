const YES_TOGGLER = document.querySelector("#yes-hotel");
const NO_TOGGLER = document.querySelector("#no-hotel");
const ACCOM = document.querySelector(".map-link");

YES_TOGGLER.addEventListener('click', function(e){
    if (e.target){
        ACCOM.style.display = "block";
    }
});
NO_TOGGLER.addEventListener('click', function(e){
    if (e.target){
        ACCOM.style.display = "none";
    }
});

const YES_MEAL_TOGGLER = document.querySelector("#yes-meal");
const NO_MEAL_TOGGLER = document.querySelector("#no-meal");
const MEALS = document.querySelector("#include-meals");

YES_MEAL_TOGGLER.addEventListener('click', function(e){
    if (e.target){
        MEALS.style.display = "flex";
    }
});
NO_MEAL_TOGGLER.addEventListener('click', function(e){
    if (e.target){
        MEALS.style.display = "none";
    }
});
const DIV_LIST = document.querySelector(".inclusion-list");
let enterButton = document.getElementById("btn-enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("#inclusion-ul");
function inputLength() {
    return input.value.length;
}
function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    let dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
  
    function deleteListItem(event) {
        event.preventDefault();
        li.classList.add("delete");
    }
  }
  function addListAfterClick(event) {
    DIV_LIST.style.display = "block";
    event.preventDefault();
    if (inputLength() > 0) {
      createListElement();
    }
  }
  function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        DIV_LIST.style.display = "block";
        event.preventDefault();
        createListElement();
    }
  }
  enterButton.addEventListener("click", addListAfterClick);
  input.addEventListener("keypress", addListAfterKeypress);

