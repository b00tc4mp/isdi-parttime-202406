(() => {
  const changePlayerNameButton = document.getElementById("changePlayerName");
  const displayNameSpan = document.getElementById("displayPlayerName");
  const restartButton = document.getElementById("restartButton");
  const stateButton = document.getElementById("stateButton");
  const minesFoundElement = document.getElementById("minesFound");
  const totalMinesElement = document.getElementById("totalMines");
  const gamesWon = document.getElementById("gamesWon");
  const gamesLostElement = document.getElementById("gamesLost");
  const clickCounter = document.getElementById("clickCounter");
  const winsInARow = document.getElementById("winsInARow");
  const table = document.getElementById("table");
  const gameTimer = document.getElementById("gameTimer");

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  let started = false;
  let gamesLost = 0;
  let minesFound = 0;
  let totalMines = 13;
  // null = ground // 1 = Number1 // 2 = Number3... // bomb = '*' // flag = '_' // blank = '.'
  const matrix = Array(11)
    .fill()
    .map(() => Array(11).fill(null)); //crea 10 arrays de 10 espacios
  let counterClicks = 0;
  const matrixClasses = Array.from({ length: 12 }, () => Array(12).fill(null));
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // PLAYER NAME
  changePlayerNameButton.onclick = () => {
    const playerName = prompt("Please enter your name.");
    displayNameSpan.innerText = playerName;
  };

  //START / LEAVE GAME
  stateButton.onclick = () => {
    // Cuando se haga click sobre "Start game":
    //  1) Tiene que cambiar a "leave game".
    //  2) Tiene que montar el tablero.
    //  3) Tiene que colocar las bombas.

    if (started === false) {
      // INICIAR PARTIDA: cuando hacemos click, el texto se cambia a "Leave game"
      started = true;
      stateButton.innerText = "Leave game";
      totalMines = 13;
      minesFound = 0;
      locateBombs(matrix);
      locateNumbersAndBlanks(matrix);
      startTimer();
    } else {
      // ABANDONAR PARTIDA: cuando hacemos click en Leave game, se cambia a Start game.
      started = false;
      stateButton.innerText = "Start game";
      totalMines = 0;
      minesFound = 0;
      gamesLost++;
      stopTimer();
      counterClicks = 0;
    }

    //RESTART BUTTON
    restartButton.onclick = () => {};

    ////////////////////////////////////////////////////////////     DOM ZONE   ////////////////////////////////////////////////////////////////////////////////////////////////////

    totalMinesElement.innerText = totalMines;
    minesFoundElement.innerText = minesFound;
    gamesLostElement.innerText = gamesLost;
    table.innerHTML = `${printDivs(matrix)}`;
    animateDivs();
    updateStats();
    clickCounter.innerText = counterClicks;
  };

  // START TIMER
  function startTimer() {
    secondsElapsed = 0; // Reiniciar el contador de tiempo

    updateTimerDisplay(); // Actualizar la pantalla inmediatamente

    timerInterval = setInterval(() => {
      secondsElapsed++;
      updateTimerDisplay();
      // Actualiza cada segundo
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval); // Detener el temporizador
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    gameTimer.innerText = `Time: ${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  }

  // NO DUPLICATED NUMBERS
  // No puede haber dos ubicaciones de bomba iguales, por lo que crearemos una función que obligue a generar 12 ubicaciones
  // aleatorias diferentes.
  function hasNoDuplicates(arr) {
    // Creamos un objeto vacío para rastrear si existe el elemento repetido.
    const elementCount = {};

    // Recorremos el array
    for (i = 0; i < arr.length; i++) {
      const num = arr[i];
      // Si num (el elemento de esa posición del array) existe en elementCount, devuelve falso, ya que sería FALSO que NO TENGA duplicados
      if (elementCount[num]) {
        return false;
      }
      elementCount[num] = true;
    }
    return true;
  }

  // CREATING CELLS
  function printDivs(matrix) {
    const template = (cell) =>
      `<div class="cell cell__ground" data-cell=${cell}></div>`;
    concatString = "";

    for (let i = 0; i < 121; i++) {
      // calcular el cell type
      // i va a ser un vector que se mueve de 0 a 121, habra que operarlo
      // para sacar la posición de la matriz
      const positionMatrix = [Math.floor(i / 11), i % 11];

      const cellType = matrix[positionMatrix[0]][positionMatrix[1]];
      matrixClasses[positionMatrix[0]][positionMatrix[1]] =
        cellType === "."
          ? ""
          : cellType === "*"
          ? "cell__typeB"
          : "cell__type" + cellType;

      concatString += template(i + 1);
    }

    return concatString;
  }

  // ANIMATING DIVS
  function animateDivs() {
    const cells = document.getElementsByClassName("cell");

    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      // aquí click izquierdo
      cell.onclick = (event) => {
        // detectar o match la posición pulsada con mi matrix
        // detectar el atributo y localizar la celda de mi matrix a consultar

        const positionNumber = Number(event.target.dataset.cell);

        //dividir entre 11 y sacar el resto

        const positionMatrix = [
          Math.floor(positionNumber / 11),
          positionNumber % 11,
        ];

        //código para desvelar la posición y mostrar el número
        if (matrix[positionMatrix[0]][positionMatrix[1]] !== "*") {
          event.target.classList.remove("cell__ground");
          event.target.classList.add("cell__reveal");
          event.target.classList.add(
            matrixClasses[positionMatrix[0]][positionMatrix[1]]
          );
        }
      };
      //aquí click derecho
      cell.oncontextmenu = (event) => {
        event.preventDefault();
      };
    }
  }

  // UPDATING STATS
  function updateStats() {
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      cell.addEventListener("click", () => {
        counterClicks++;
        clickCounter.innerText = counterClicks;
      });
      cell.addEventListener("contextmenu", () => {
        counterClicks++;
      });
    }
  }

  //LOCATING NUMBERS AND BLANKS
  function locateNumbersAndBlanks(matrix) {
    // iteramos sobre la fila
    for (let i = 0; i < matrix.length; i++) {
      // iteramos sobre los elementos de la fila (los cuales nos diran la columna)
      for (let j = 0; j < matrix[i].length; j++) {
        // guardamos el resultado en una celda
        const cell = matrix[i][j];

        if (cell !== "*") {
          // si dicha celda NO es una bomba
          //creamos una ruta de posiciones que irán alrededor de la celda seleccionada
          const relativePositions = [
            [-1, -1], // arriba izquierda
            [-1, 0], // arriba
            [-1, 1], // arriba derecha
            [1, -1], // abajo izquierda
            [1, 0], // abajo
            [1, 1], // abajo derecha
            [0, -1], // izquierda
            [0, 1], // derecha
          ];

          // declaramos un contador que nos servirá para establecer el número de bombas con el que entra en contacto esa celda
          let counter = 0;
          // iniciamos un bucle que recorrerá las 8 posiciones adyacentes, siguiendo la ruta anteriormente declarada
          for (let k = 0; k < 8; k++) {
            // nos aseguramos que matrix[i] (esa fila) exista
            if (matrix[i + relativePositions[k][0]] !== undefined) {
              // si la fila matrix[i] existe, pasamos a la siguiente comprobación:
              if (
                // cada vez que una de las relativePositions, sea = "*",
                matrix[i + relativePositions[k][0]][
                  j + relativePositions[k][1]
                ] === "*"
              ) {
                // subirá +1 al contador
                counter++;
              }
            }
          }
          // cuando acabe de recorrer todas las posiciones adyacentes, devolveremos el valor del counter ya sea blanco o un número
          matrix[i][j] = counter === 0 ? "." : counter;
        }
      }
      console.log(matrix);
    }
  }

  //LOCATING BOMBS
  // función para colocar 12 bombas en el tablero de 100 casillas de forma aleatoria sin que se repitan.
  function locateBombs(matrix) {
    let randomPosition = [];
    let isDuplicated = true; //establecemos esta variable como true

    do {
      randomPosition = Array.from(
        { length: totalMines },
        () => Math.floor(Math.random() * 120) + 1
      );
      isDuplicated = !hasNoDuplicates(randomPosition); // si la afirmación de que no haya duplicados es cierta, isDuplicated será false (ya que hemos puesto !)
    } while (isDuplicated); // si !hasNoDuplicates = false, no te volverá a crear el array de 10 posiciones de bomba.

    // Mientras que isDuplicated sea true, significa que hay duplicados, por lo tanto se generará un nuevo array con 10 posiciones nuevas hasta que ninguna se repita.

    // Este código devuelve un Array con 12 números (porque le hemos dicho que la longitud sea la de totalMines
    // y totalMines es 12) entre 1 y 99, pero como queremos que sea hasta 100 le sumamos 1 al final.
    // Los números que esta función devuelva seran las posiciones en las que iran las bombas.

    //Ahora vamos a extraer las coordenadas de cada posición, para poder colocarlas en función de la fila y de la columna.
    randomPosition.forEach((element, i) => {
      let row = Math.floor(element / 11);
      let column = element % 11;
      randomPosition[i] = [row, column];
    });

    for (let i = 0; i < randomPosition.length; i++) {
      const element = randomPosition[i]; // [row, column]

      matrix[element[0]][element[1]] = "*";
    }
    console.log(matrix);
  }
})();
