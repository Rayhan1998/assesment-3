let buttons = document.querySelectorAll("button");

//  note for reviewer couldve made event listeners for each button but thought this would be more efficiant (:

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(e) {
    if (e.target.innerText === "My Favorite Color") {
      alert("red");
    } else if (e.target.innerText === "My Favorite Place") {
      alert("the beach");
    } else if (e.target.innerText === "My Favorite Ritual") {
      alert("meditation");
    }
  });
}
