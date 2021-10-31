let buttons = document.querySelectorAll("button");

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
