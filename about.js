console.log("hello world");
let form = document.querySelector("form#contact");
let catImage = document.getElementById("cat-image");
let compliments = document.querySelectorAll(".compliments");
function handleSubmit(evt) {
  evt.preventDefault();

  alert("submit succesfull");
}

form.addEventListener("submit", handleSubmit);
catImage.addEventListener("mouseover", function(e) {
  let randomNumber = Math.floor(Math.random() * compliments.length);
  // alerts users random comments from the compliments array
  alert(compliments[randomNumber].textContent);
});
