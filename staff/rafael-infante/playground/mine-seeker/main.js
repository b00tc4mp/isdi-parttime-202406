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
  let counterClicks = 0;
 
  const matrix =  Array.from({length: 12}, () => Array(12).fill(0));
  // null = ground // 1 = number1 // 2 = number2 ... // bomb = '*' // flag = '_' // blank = '.'
  
  ////////////////////////////////////////////////////////////////////////////////////////////////

  changePlayerNameButton.onclick = () => {
    const playerName = prompt("Elige tu nombre de usuario: ");
    displayNameSpan.innerText = playerName;
  };
  
  stateButton.onclick = () => {

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
      counterClicks = 0;
    }
///////////////////////////////////////////////////////////////////////
// DOM ZONE

    minesFound.innerText = foundMines;
    minesTotal.innerText = totalMines;
    gamesLost.innerText = lostgames;
    clickCounter.innerText = counterClicks;
    table.innerHTML = `
    ${printDivs(matrix)}
    `;
    animateDivs();
    updateStats();
    // dar funcionalidad a los divs
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

function animateDivs() {
  const cells = document.getElementsByClassName('cell');

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    // aqui la logica del click izquierdo
    cell.onclick = (event) => {
      // matchear la posicion pulsada con mi matrix
      // detectar el atributo data y localizar posicion de matrix a consultar
      const positionNumber = Number(event.target.dataset.cell);

      const positionMatrix = [
        Math.ceil(positionNumber / 12) - 1, 
        (positionNumber - 1) % 12
      ];
      // revelar la posicion y mostrar el numero
      if (matrix[positionMatrix[0]][positionMatrix[1]] !== '*') {
        event.target.classList.remove('cell__ground');
        event.target.classList.add('cell__reveal');
      }
    }
    // aqui la logica del click derecho
    cell.oncontextmenu = (event) => {
      event.preventDefault()
      
    }
  }
}

// aqui actualizo las stats en pantalla usando listeners
function updateStats() {
  const cells = document.getElementsByClassName('cell');

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener('click', (event) => {
      counterClicks++;
      clickCounter.innerText = counterClicks;
    })
    cell.addEventListener('contextmenu', (event) => {
      counterClicks++;
      clickCounter.innerText = counterClicks;
    })
  }
}

function locateNumbersAndBlanks(matrix) {

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      
      const cell = matrix[i][j];

      if (cell !== '*') {
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

function printDivs(matrix) {
  // cellType => '.', 1, 2, 3, 4, 5, 6, 7, 8
 const template = (cell, cellType) => 
  `<div class="cell cell__ground ${
    cellType === '.' 
    ? '' 
    : cellType === '*' 
    ? 'cell__typeB' 
    : 'cell__type' + cellType
  }" data-cell=${cell}></div>`;

 let concatString = "";

 for (let i = 1; i <= 144; i++) {
  // calcular el cell type
  // operar el vector i para sacar la posicion de la matrix
  const positionMatrix = [
    Math.ceil(i / 12) - 1, 
    (i - 1) % 12
  ]

  const cellType = matrix[positionMatrix[0]][positionMatrix[1]];


  concatString += template(i + 1, cellType);
 }

 return concatString;
}

})()


// EL funcionamiento es que si pulsamos click izquierdo sobre el mapa desvela la posicion,
// si es blank pondra blank o el numero correspondiente y si es una bomba petara, se sumara una partida perdida y se reinicia el tablero

// el funcionamiento del click derecho va a ser poner una flag

// queda por localizar los numeros que estan cerca de las bombas

// con cada click debe ser la web reactiva (actualizar las Stats)