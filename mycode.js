spotClickCount = 0;

function makeGreen() {
  document.getElementsByClassName("header--bouton-blue")[0].className = 'header--button-green';
}

function sayGoodbye() {
  document.getElementById("header").innerText = "Au revoir"
}

function answer() {
  document.getElementById("copy").innerText = "Très bien et toi?"
}

function markBox(boite) {
  if(spotClickCount % 2 == 0) {
    marker = 'X';
  }else {
    marker = 'O';
  }
  document.getElementsByClassName("spot")[boite].innerText = marker;
  spotClickCount = spotClickCount+1;
}
