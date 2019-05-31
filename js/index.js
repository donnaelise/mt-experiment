var arr = ["https://codepen.io/crafteddigit/full/OYwXWa", "https://codepen.io/crafteddigit/full/yWxwaw", "https://codepen.io/crafteddigit/full/LogjbO"];
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function randomize() {
  document.getElementById("randomLink").href = arr[(getRandomInt(arr.length))];
}
randomize();