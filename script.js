function Play() {
  var Result = document.querySelector("h1");
  var img1 = document.querySelector(".img1");
  var img2 = document.querySelector(".img2");
  var RandomNumberDice1 = Math.floor(Math.random() * 6 + 1);
  var RandomNumberDice2 = Math.floor(Math.random() * 6 + 1);
  img1.setAttribute("src", `images/dice${RandomNumberDice1}.png`);
  img2.setAttribute("src", `images/dice${RandomNumberDice2}.png`);

  if (RandomNumberDice1 > RandomNumberDice2) {
    Result.textContent = "Player 1 Wins .";
  } else if (RandomNumberDice2 > RandomNumberDice1) {
    Result.textContent = "Player 2 Wins .";
  } else {
    Result.textContent = "Draw .";
  }
}

Play();
