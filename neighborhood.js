let restaurants = [
  "https://www.elasadordetroit.com/",
  "https://takoidetroit.com/",
  "https://detroit75kitchen.com/",
  "https://www.facebook.com/TamaleriaNuevoLeon",
  "https://www.facebook.com/DulysConeyIslan"
];
let btn = document.querySelector(".restaurant-btn");

btn.addEventListener("click", function(e) {
  let randomNumber = Math.floor(Math.random() * restaurants.length);
  console.log(randomNumber);
  window.open(restaurants[randomNumber], "_blank").focus();
});
