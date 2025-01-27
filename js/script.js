// random number form 1 to 3

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

// assigned random computer move

if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(randomNumber == 2){
    computerMove = 'papier';
}

else if(randomNumber == 3){
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

// player move picker

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

//assigned player move

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

else if(playerInput == '2'){
    playerMove = 'papier'
}

else if(playerInput == '3'){
    playerMove = 'nożyce'
}

printMessage('Twój ruch to: ' + playerMove);

// win

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }

  else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } 

  else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!')
  }

// lose

  if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegrwasz!');
  }

  else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegrwasz!');
  } 

  else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty przegrwasz!')
  }

  // draw

  if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }

  else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  } 

  else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!')
  }

  // Security

  if(playerMove == 'nieznany ruch'){
    printMessage('ZŁA ODPOWIEDŹ WYBIERZ 1, 2 LUB 3')
  }