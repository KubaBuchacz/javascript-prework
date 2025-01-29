function playGame(playerInput){

  clearMessages();

  // random pc move
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerMove = getMoveName(randomNumber);

  /* 
  if (randomNumber === 1) {
      computerMove = 'kamień';
  } else if (randomNumber === 2) {
      computerMove = 'papier';
  } else if (randomNumber === 3) {
      computerMove = 'nożyce';
  }
  */


  // assign player input
  //* let playerInput = parseInt(prompt("Wybierz swój ruch (1: kamień, 2: papier, 3: nożyce): "));
  let playerMove = getMoveName(playerInput);

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

    /* 
  if (playerInput === 1) {
      playerMove = 'kamień';
  } else if (playerInput === 2) {
      playerMove = 'papier';
  } else if (playerInput === 3) {
      playerMove = 'nożyce';
  }
  */

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

let playRock = document.getElementById('play-rock');

play-rock.addEventListener('click', buttonClicked){
    playGame(1);
};

let playPaper = document.getElementById('play-paper');

play-paper.addEventListener('click', buttonClicked){
    playGame(2);
};

let playScissors = document.getElementById('play-scissors');

play-scissors.addEventListener('click', buttonClicked){
    playGame(3);
};
