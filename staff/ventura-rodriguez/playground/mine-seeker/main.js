const changePlayerNameButton = document.getElementById("changePlayerName");
const displayNameSpan = document.getElementById("displayPlayerName");

////////////////////////////////////////////////////////////////////////////////////////////////

changePlayerNameButton.onclick = () => {
  const playerName = prompt("Elige tu nombre de usuario: ");
  displayNameSpan.innerText = playerName;
};
