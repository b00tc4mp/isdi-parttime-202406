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
  const table = document.getElementById("table")

  let started = false;
  let lostgames = 0;
  let totalMines = 0;
  let foundMines = 0;
  const matrix =  Array.from({length: 12}, () => Array(12).fill(0));
  //  = ground // 1 = number1 // 2 = number3 ... // bomb = '*' // flag = '_' // blank = '.'



  ////////////////////////////////////////////////////////////////////////////////////////////////

  changePlayerNameButton.onclick = () => {
    const playerName = prompt("Elige tu nombre de usuario: ");
    displayNameSpan.innerText = playerName;
  };
  
  stateButton.onclick = () => {
    // montar el tablero dibujado en mi html
    // colocar las bombas en el sitio adecuado

    if (started === false) {
      //inicializar partida
      stateButton.innerText = "Abandonar partida";
      started = true;
      foundMines = 0;
      totalMines = 16;
      prepareGame();
    } else {
      //terminar partida
      stateButton.innerText = "Empezar partida";
      started = false;
      foundMines = 0;
      totalMines = 0;
      lostgames++;
  }
///////////////////////////////////////////////////////////////////////
// DOM ZONE

    minesFound.innerText = foundMines;
    minesTotal.innerText = totalMines;
    gamesLost.innerText = lostgames;
    table.innerHTML = `
    ${printDivs()}
    `
  }

function prepareGame(){

  //Meter las bombas con un numero aleatorio y que no esten repetidas las posiciones
  const randomMines = Array.from(
    {length: totalMines},
    () => Math.floor(Math.random() * 144) + 1
  );
  

}

})()