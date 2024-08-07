const changePlayerNameButton = document.getElementById("changePlayerName");
const displayNameSpan = document.getElementById("displayPlayerName");
const restartButton = document.getElementById("restartButton");
const stateButton = document.getElementById("stateButton");
const minesFound = document.getElementById("minesFound");
const totalMines = document.getElementById("totalMines");

changePlayerNameButton.onclick = () => {
    const playerName = prompt('Please enter your name.');
    displayNameSpan.innerText = playerName;
}