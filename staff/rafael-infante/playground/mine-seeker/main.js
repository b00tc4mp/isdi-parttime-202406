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
  const table = document.getElementById("table");

  //////////////////////////////////////////////////////////////////////////////////////////////

  let started = false;
  let lostgames = 0;
  let totalMines = 0;
  let foundMines = 0;

 
  const matrix =  Array.from({length: 12}, () => Array(12).fill(0));
  // null = ground // 1 = number1 // 2 = number2 ... // bomb = '*' // flag = '_' // blank = '.'
  
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
      locateBombs(matrix);
      locateNumbersAndBlanks(matrix);
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
    `;
    console.log(matrix)
  };

function hasNoDuplicates(arr) {
   const elementCount = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (elementCount[num]) {
      return false;
    }
    elementCount[num] = true;
  }
  return true;
}

function locateNumbersAndBlanks(matrix) {
  // nuestro codigo para meter los numeros y los espacios en blanco
  // recorrer la matriz resultante y mirar las celdas adyacentes

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      
      const cell = matrix[i][j];

      if (cell !== '*') {
        // null = ground // 1 = number1 // 2 = number2 ... // bomb = '*' // flag = '_' // blank = '.'
        // hago un bucle con k  que itere sobre las celdas adyacentes a matrix[i][j] 
        // si alguna es bomba le sumo uno al contador

        const relativePositions = [
          [-1, -1], [-1, 0], [-1, 1], [1, -1], [1, 0], [1, 1], [0, -1], [0, 1]
        ]
        
        let counter = 0;
        for (let k = 0; k < 8; k++) {
          if (matrix[i + relativePositions[k][0]] !== undefined) {
            if(
              matrix[i + relativePositions[k][0]][j + relativePositions[k][1]] === '*'){
              counter++;
            }
          }
        }
        matrix[i][j] = counter === 0 ? '.' : counter;
      }
    }
  }
  
}

function locateBombs(matrix) {
  // tenemos 144 posiciones hacemos un random entre las posiciones hasta llegar a las 16 bombas
  let randomNumbers = [];
  let isDuplicated = true;

  do {
      randomNumbers = Array.from(
      {length: totalMines}, 
      () => Math.floor(Math.random() * 144) + 1
    );
    isDuplicated = !hasNoDuplicates(randomNumbers);
  } while (isDuplicated)

  // queremos pasar ese array de 16 numeros enteros a un array de coordenadas (row, column)
  // recorremos ese array con un forEach y le cambiamos el valor por el que necesitamos haciendo una operacion matematica
  // si dividimos el elemento entre 12 nos da el numero de fila y el resto de ese elemnto de 12 nos da el numero de columna

  randomNumbers.forEach((element, i) => {
    const row = Math.ceil(element / 12) - 1;
    const column = (element - 1) % 12;
    randomNumbers[i] = [row, column];
  });

  for (let i = 0; i < randomNumbers.length; i++) {
    const element = randomNumbers[i];

    matrix[element[0]][element[1]] = "*";
  }
}

function printDivs() {
 const template = '<div class="cell cell__ground"></div>';

 let concatString = "";

 for (let i = 0; i < 144; i++) {
  concatString += template;
 }

 return concatString;
}

})()


// EL funcionamiento es que si pulsamos click izquierdo sobre el mapa desvela la posicion,
// si es blank pondra blank o el numero correspondiente y si es una bomba petara y se reinicia el tablero

// el funcionamiento del click derecho va a ser poner una flag

// queda por localizar los numeros que estan cerca de las bombas

// con cada click debe ser la web reactiva (actualizar las Stats)