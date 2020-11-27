window.onload = () => {
  "use strict";

  // test si le navigateur du client gère le serviceWorker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js"); // le cas échant on enregistre notre gestionnaire
  }
};

var y = 0;

// change la couleur du rond 1 pendant 900ms quand on clique dessus
function changeColor1() {
  document.getElementById("circle1").style.background = "#8c0031";
  y = 1;
  console.log(y);
  setTimeout(color1End, 900);
  if (x == y) {
    console.log("Gagné !");
    document.getElementById("circle1").style.background = "#5aa677";
  }
  else {
    console.log("Perdu !");
  }
}
function color1End() {
  document.getElementById("circle1").style.background = "none";
}

// change la couleur du rond 2 pendant 900ms quand on clique dessus
function changeColor2() {
  document.getElementById("circle2").style.background = "#8c0031";
  y = 2;
  console.log(y);
  setTimeout(color2End, 900);
  if (x == y) {
    console.log("Gagné !");
    document.getElementById("circle2").style.background = "#5aa677";
  }
  else {
    console.log("Perdu !");
  }
}
function color2End() {
  document.getElementById("circle2").style.background = "none";
}

// change la couleur du rond 3 pendant 900ms quand on clique dessus
function changeColor3() {
  document.getElementById("circle3").style.background = "#8c0031";
  y = 3;
  console.log(y);
  setTimeout(color3End, 900);
  if (x == y) {
    console.log("Gagné !");
    document.getElementById("circle3").style.background = "#5aa677";
  }
  else {
    console.log("Perdu !");
  }
}
function color3End() {
  document.getElementById("circle3").style.background = "none";
}

var x = 0;

// génère un chiffre aléatoire entre 1 et 3 et change la couleur du cercle choisit pendant 900ms
function generateColor() {
  x = Math.floor(Math.random() * 3 + 1);
  document.getElementById("circle" + x).style.background = "#003755";
  console.log(x);
  if (x == 1) {
    setTimeout(color1End, 900);
  }
  if (x == 2) {
    setTimeout(color2End, 900);
  }
  if (x == 3) {
    setTimeout(color3End, 900);
  }
}