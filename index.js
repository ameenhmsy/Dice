var tab = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
];

function randImg() {
  var x = Math.floor(Math.random() * 6);
  var y = Math.floor(Math.random() * 6);

  //document.getElementsByTagName('img')[0].src = tab[x];
  document.getElementsByClassName("img1")[0].setAttribute("src", tab[x]);
  document.getElementsByClassName("img2")[0].setAttribute("src", tab[y]);

  if (x > y) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Winnwer";
  } else if (x < y) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Winnwer";
  } else {
    document.getElementsByTagName("h1")[0].innerHTML = "Duce";
  }
}

randImg();
