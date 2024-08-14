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
  let winsInARowCounter = 0;
  let lostGames = 0;
  let wonGames = 0;
  let totalMines = 0;
  let foundMines = 0;
  // null = ground // 1 = Number1 // 2 = Number3... // bomb = '*' // flag = '_' // blank = '.'
  const matrix = Array.from({ length: 12 }, () => Array(12).fill(null));
  let counterClicks = 0;

  ////////////////////////////////////////////////////////////////////////////////////////////////

  changePlayerNameButton.onclick = () => {
    const playerName = prompt("Elige tu nombre de usuario: ");
    displayNameSpan.innerText = playerName;
  };

  stateButton.onclick = () => {
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
      counterClicks = 0;
      winsInARowCounter = 0;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////
    // DOM zone
    minesFound.innerText = foundMines;
    minesTotal.innerText = totalMines;
    gamesLost.innerText = lostGames;
    table.innerHTML = `
      ${printDivs()}
    `;
    animateDivs();
    updateStats();
    clickCounter.innerText = counterClicks;
    winsInARow.innerText = winsInARowCounter;
  };

  restartButton.onclick = () => {
    started = false;
    stateButton.innerText = "Empezar partida";
    totalMines = 0;
    foundMines = 0;
    counterClicks = 0;
    minesFound.innerText = "_";
    minesTotal.innerText = "_";
    clickCounter.innerText = counterClicks;
    table.innerHTML = "";
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

  function getClassFromMatrix(matrix, i, j) {
    const cellType = matrix[i][j];
    const classToAdd =
      cellType === "."
        ? null
        : cellType === "*"
        ? "cell__typeB"
        : "cell__type" + cellType;

    return classToAdd;
  }

  function virus(matrix, i, j) {
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
    const cells = document.getElementsByClassName("cell");
    const blanks = [];
    for (let k = 0; k < 8; k++) {
      const position = [
        relativePositions[k][0] + i,
        relativePositions[k][1] + j,
      ];
      if (
        position[0] >= 0 &&
        position[1] >= 0 &&
        position[0] < 12 &&
        position[1] < 12
      ) {
        const positionNumber = position[0] * 12 + position[1] + 1;
        const classToAdd = getClassFromMatrix(matrix, position[0], position[1]);
        const shouldBeAdded =
          cells[positionNumber - 1].classList.contains("cell__ground");
        if (classToAdd === null && shouldBeAdded) blanks.push(position);
        cells[positionNumber - 1].classList.remove("cell__ground");
        cells[positionNumber - 1].classList.add("cell__reveal");
        if (classToAdd) cells[positionNumber - 1].classList.add(classToAdd);
      }
    }
    if (blanks.length)
      blanks.forEach((blank) => virus(matrix, blank[0], blank[1]));
  }

  function printDivs() {
    // celltype => '.', 1, 2, 3, 4, 5, 6, 7, 8
    const template = (cell) =>
      `<div class="cell cell__ground" data-cell=${cell} ></div>`;

    concatString = "";

    for (let i = 0; i < 144; i++) {
      concatString += template(i + 1);
    }

    return concatString;
  }

  function animateDivs() {
    const cells = document.getElementsByClassName("cell");

    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      // aquí la lógica del click izquierdo
      cell.onclick = (event) => {
        if (event.target.classList.contains("cell__reveal")) return;
        if (event.target.classList.contains("cell__flag")) return;

        const positionNumber = Number(event.target.dataset.cell - 1);
        const positionMatrix = [
          Math.floor(positionNumber / 12),
          positionNumber % 12,
        ];
        if (matrix[positionMatrix[0]][positionMatrix[1]] === "*") {
          const cells = document.getElementsByClassName("cell");
          for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            cell.classList.remove("cell__ground");
            cell.classList.add("cell__reveal");
            const cellNumber = Number(cell.dataset.cell) - 1;
            const x = Math.floor(cellNumber / 12);
            const y = cellNumber % 12;
            const classToAdd = getClassFromMatrix(matrix, x, y);
            if (classToAdd) cell.classList.add(classToAdd);
          }
          setTimeout(() => {
            alert("F 💀. NOOB VUELVETE A HABBO HOTEL");
            started = false;
            stateButton.innerText = "Empezar partida";
            totalMines = 0;
            foundMines = 0;
            lostGames++;
            counterClicks = 0;
            winsInARowCounter = 0;
            minesFound.innerText = "_";
            minesTotal.innerText = "_";
            gamesLost.innerText = lostGames;
            clickCounter.innerText = counterClicks;
            winsInARow.innerText = winsInARowCounter;
            table.innerHTML = "";
          }, 500);
        } else if (matrix[positionMatrix[0]][positionMatrix[1]] === ".") {
          virus(matrix, positionMatrix[0], positionMatrix[1]);
          event.target.classList.remove("cell__ground");
          event.target.classList.add("cell__reveal");
          const classToAdd = getClassFromMatrix(
            matrix,
            positionMatrix[0],
            positionMatrix[1]
          );
          if (classToAdd) event.target.classList.add(classToAdd);
        } else {
          event.target.classList.remove("cell__ground");
          event.target.classList.add("cell__reveal");
          const classToAdd = getClassFromMatrix(
            matrix,
            positionMatrix[0],
            positionMatrix[1]
          );
          if (classToAdd) event.target.classList.add(classToAdd);
        }
      };
      // aquí la lógica del click derecho
      cell.oncontextmenu = (event) => {
        event.preventDefault();
        if (event.target.classList.contains("cell__reveal")) return;

        if (event.target.classList.contains("cell__flag")) {
          event.target.classList.remove("cell__flag");
          event.target.classList.add("cell__ground");
          foundMines--;
        } else {
          event.target.classList.remove("cell__ground");
          event.target.classList.add("cell__flag");
          foundMines++;
        }

        if (foundMines === 16) {
          const cells = [...document.getElementsByClassName("cell")];

          const cellsWithFlags = cells.filter((cell) =>
            cell.classList.contains("cell__flag")
          );

          const cellsWithFlagsPosition = cellsWithFlags.map((cell) => {
            const cellNumber = Number(cell.dataset.cell) - 1;

            const cellPosition = [Math.floor(cellNumber / 12), cellNumber % 12];

            return cellPosition;
          });

          const isWinner = cellsWithFlagsPosition.every(
            (cell) => matrix[cell[0]][cell[1]] === "*"
          );

          if (isWinner) {
            alert("Mucho 'ar tardao' compa'e 🥱");
            setTimeout(() => {
              started = false;
              stateButton.innerText = "Empezar partida";

              wonGames++;
              totalMines = 0;
              foundMines = 0;
              counterClicks = 0;
              winsInARowCounter++;

              gamesWon.innerText = wonGames;
              minesFound.innerText = "_";
              minesTotal.innerText = "_";
              clickCounter.innerText = counterClicks;
              winsInARow.innerText = winsInARowCounter;
              table.innerHTML = "";
            }, 500);
          }
        }

        minesFound.innerText = foundMines;
      };
    }
  }

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
        clickCounter.innerText = counterClicks;
      });
    }
  }

  function locateNumbersAndBlanks(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const cell = matrix[i][j];

        if (cell !== "*") {
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
    }
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

// hacer botón reinicio