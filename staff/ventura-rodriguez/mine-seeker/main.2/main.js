(() => {
  const changePlayerNameButton = document.getElementById("changePlayerName");
  const displayNameSpan = document.getElementById("displayPlayerName");
  const restartButton = document.getElementById("restartButton");
  const stateButton = document.getElementById("stateButton");
  const minesFound = document.getElementById("minesFound");
  const minesTotal = document.getElementById("minesTotal");
  const gamesWon = document.getElementById("gamesWon");
  const gamesLost = document.getElementById("gamesLost");
  const clickCounter = document.getElementById("clickCounter");
  const winsInARow = document.getElementById("winsInARow");
  let state = false;

  ////////////////////////////////////////////////////////////////////////////////////////////////

  changePlayerNameButton.onclick = () => {
    const playerName = prompt("Elige tu nombre de usuario: ");
    displayNameSpan.innerText = playerName;
  };

  stateButton.onclick = () => {
    // montar el tablero dibujado en mi html
    // colocar las bombas en el sitio adecuado
    if (state === false) {
      stateButton.innerText = "Terminar partida";
      state = true;
    } else {
      stateButton.innerText = "Empezar partida";
      state = false;
    }
  };
})();
