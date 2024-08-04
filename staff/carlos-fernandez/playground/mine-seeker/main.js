const changePlayerNameButton = document.getElementById("changePlayerName");
let displayNameSpan = document.getElementById("displayPlayerName");


changePlayerNameButton.onclick = () => {
    const playerName = prompt('Please enter your name.');
    displayNameSpan.innerText = playerName;

}