function playGame(playerInput) {
    clearMessages();

    // random pc move
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerMove = getMoveName(randomNumber);

    let playerMove = getMoveName(playerInput); // Teraz używamy argumentu playerInput

    // Assign name by number
    function getMoveName(moveNumber) {
        if (moveNumber === 1) {
            return 'kamień';
        } else if (moveNumber === 2) {
            return 'papier';
        } else if (moveNumber === 3) {
            return 'nożyce';
        } else {
            return 'nieznany ruch';
        }
    }

    // display 
    function displayResult(playerMove, computerMove) {
        if (playerMove === computerMove) {
            return 'Remis! Obaj wybraliście ' + playerMove + '.';
        } else if (
            (playerMove === 'kamień' && computerMove === 'nożyce') ||
            (playerMove === 'papier' && computerMove === 'kamień') ||
            (playerMove === 'nożyce' && computerMove === 'papier')
        ) {
            return 'Wygrałeś! ' + playerMove + ' pokonał ' + computerMove + '.';
        } else {
            return 'Przegrałeś! ' + computerMove + ' pokonał ' + playerMove + '.';
        }
    }

    // display by alert
    alert(displayResult(playerMove, computerMove));
}

// Poprawione event listenery
document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
});