var arr = ["vg1.html", "vg1.html", "vg1.html"];
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function randomize() {
  document.getElementById("randomLink").href = arr[(getRandomInt(arr.length))];
}
randomize();