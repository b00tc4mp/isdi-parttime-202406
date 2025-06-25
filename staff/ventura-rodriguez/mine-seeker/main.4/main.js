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

  ////////////////////////////////////////////////////////////////////////////////////////////////

  let started = false;
  let lostGames = 0;
  let totalMines = 0;
  let foundMines = 0;
  // null = ground // 1 = Number1 // 2 = Number3... // bomb = '*' // flag = '_' // blank = '.'
  const matrix = Array.from({ length: 12 }, () => Array(12).fill(null));

  ////////////////////////////////////////////////////////////////////////////////////////////////

  changePlayerNameButton.onclick = () => {
    const playerName = prompt("Elige tu nombre de usuario: ");
    displayNameSpan.innerText = playerName;
  };

  stateButton.onclick = () => {
    // montar el tablero dibujado en mi html
    // colocar las bombas en el sitio adecuado

    if (started === false) {
      // Inicializar la partida
      started = true;
      stateButton.innerText = "Abandonar partida";
      foundMines = 0;
      totalMines = 16;
      locateBombs(matrix);
      locateNumbersAndBlanks(matrix);
    } else {
      // Terminar la partida
      started = false;
      stateButton.innerText = "Empezar partida";
      totalMines = 0;
      foundMines = 0;
      lostGames++;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////
    // DOM zone
    minesFound.innerText = foundMines;
    minesTotal.innerText = totalMines;
    gamesLost.innerText = lostGames;
    table.innerHTML = `
      ${printDivs()}
    `;
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

  function printDivs() {
    const template = '<div class="cell cell__ground"></div>';

    concatString = "";

    for (let i = 0; i < 144; i++) {
      concatString += template;
    }

    return concatString;
  }

  function locateNumbersAndBlanks(matrix) {
    // nuestro código para meter los números y los espacios en blanco
    // analizar la matriz y colocar un valor dependiendo de su posición

    // primero seleccionaremos los espacios sin bomba
    //
    // propuesta del contador de si tiene algo al lado
    // mirar las celdas adyacentes que son 8 para cada una y entonces decidir que poner

    // nos acercamos a las bombas y ponemos los de alrededor
    // después le metemos los espacios que quedan

    // i = 5  --  j = 5

    // recorremos la matriz y hacemos la parte del contador y ponemos o el blank o el numero correspondiente
    // si nos encontramos una bomba hacemos "pass"
    debugger;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const cell = matrix[i][j];

        if (cell !== "*") {
          // matrix[i-1][j-1] diagonal izquierda arriba
          // matrix[i-1][j] arriba
          // matrix[i-1][j+1] diagonal derecha arriba
          // matrix[i+1][j-1] diagonal abajo izquierda
          // matrix[i+1][j] abajo
          // matrix[i+1][j+1] diagonal derecha abajo
          // matrix[i][j-1] izquierda
          // matrix[i][j+1] derecha

          const relativePositions = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [1, -1],
            [1, 0],
            [1, 1],
            [0, -1],
            [0, 1],
          ];

          let counter = 0;
          for (let k = 0; k < 8; k++) {
            if (matrix[i + relativePositions[k][0]] !== undefined) {
              if (
                matrix[i + relativePositions[k][0]][
                  j + relativePositions[k][1]
                ] === "*"
              ) {
                counter++;
              }
            }
          }
          matrix[i][j] = counter === 0 ? "." : counter;
        }
      }
      debugger;
      console.log(matrix);
    }

    // debugger;
    // const bombPositions = matrix.reduce((acumulator, array, i) => {
    //   const result = acumulator.map((element) => element !== null);
    //   // result es mi array con los true y los false
    //   // [true, false, true...]
    //   return result.map((element, j) => (element === true ? [j, i - 1] : null));
    //   // parámetros son element y j, return el if de si element es === true, en caso de que si
    //   // retorno coordenadas en caso de que no retorno null
    // });

    console.log("hello wolrd");
  }

  function locateBombs(matrix) {
    let randomNumbers = [];
    let isDuplicated = true;

    do {
      randomNumbers = Array.from(
        { length: totalMines },
        () => Math.floor(Math.random() * 144) + 1
      );
      isDuplicated = !hasNoDuplicates(randomNumbers);
    } while (isDuplicated);

    randomNumbers.forEach((element, i) => {
      const row = Math.floor(element / 12);
      const column = element % 12;
      randomNumbers[i] = [row, column];
    });

    for (let i = 0; i < randomNumbers.length; i++) {
      const element = randomNumbers[i]; // [row, column]

      matrix[element[0]][element[1]] = "*";
    }
  }
})();

// EL funcionamiento va a ser que cuando hagamos click izquierdo nos pulsa sobre el mapa y desvela
// la posición, si la posición es blanca todo ok, pondra blank o el número correcspondiente
// la posición es bomba petará y se le sumará una perdida y se reinicia el tablero
// si se coloca en un banl se deben mostrar todos los blanks

// El funcionamiento del click derecho va a ser poner una flag

// con cada click debemos comprobar que la web sea reactiva
