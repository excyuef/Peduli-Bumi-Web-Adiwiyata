// GAME RESULT 
      let gameScore = JSON.parse(localStorage.getItem('gameScore')) || {
          wins : 0,
          losses : 0,
          ties : 0
        };
        
      updateScore();
      
      function playGame (playerMove) {
        const computerMove = pickComputerMove();
        
        let result = ''
        
        if (playerMove === 'streak' ) {
          if (computerMove === 'air') {
            result = 'You are loser.'
          } else if (computerMove === 'pohon') {
            result = 'You are the winner!.'
          } else if (computerMove === 'streak') {
            result = 'Tie.'
          }
        } else if (playerMove === 'air') {
            if (computerMove === 'streak') {
              result = 'You are the winner!.'
            } else if (computerMove === 'air') {
              result = 'Tie.'
            } else if (computerMove === 'pohon') {
              result = 'You are loser.'
           }
          } else if (playerMove === 'pohon') {
              if (computerMove === 'pohon') {
              result = 'Tie.'
              } else if (computerMove === 'streak') {
              result = 'You are loser.'
              } else if (computerMove === 'air') {
              result = 'You are the winner!.'
              }
            }
         
        if (result === 'You are the winner!.') {
          gameScore.wins += 1
        } else if (result === 'You are loser.') {
          gameScore.losses += 1
        } else if (result === 'Tie.') {
          gameScore.ties += 1
        }
        
        localStorage.setItem('gameScore', JSON.stringify(gameScore));
        
        updateScore();
        
        document.querySelector('.result-js')
          .innerHTML = `${result}`;
          
        document.querySelector('.you-n-computer-move-js')
          .innerHTML = `You <img src="img/icon/${playerMove}.png" class="icon"> VS <img src="img/icon/${computerMove}.png" class="icon"> computer`;
        
        return result;
      }
      
      function updateScore () {
        document.querySelector('.score-js')
          .innerHTML = `Wins : ${gameScore.wins}, Losses : ${gameScore.losses}, Ties : ${gameScore.ties}`;
      }
      
      function pickComputerMove() {
        const randomMove = Math.random();
    
        let computerMove = '';
        
        if (randomMove >=0 && randomMove <= 1/3) {
          computerMove = 'streak'
        } else if (randomMove >=1/3 && 
          randomMove <= 2/3) {
            computerMove = 'air'
        } else if (randomMove >=2/3 && 
          randomMove <= 1) {
            computerMove = 'pohon'
        }
        
        return computerMove;
      }