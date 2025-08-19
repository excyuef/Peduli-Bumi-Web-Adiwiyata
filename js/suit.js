// GAME RESULT 
  let gameScore = JSON.parse(localStorage.getItem('gameScore')) || {
    wins : 0,
    losses : 0,
    ties : 0
  };
  
  updateScore();
  
  var reset = document.querySelector(".reset-score-button")
  var move = document.querySelector(".you-n-computer-move-js")
  
  
  function playGame (playerMove) {
    const computerMove = pickComputerMove();
    let result = ''
    if (playerMove === 'streak' ) {
      if (computerMove === 'air') {
        result = 'Kamu Kalah.'
      } else if (computerMove === 'pohon') {
        result = 'Kamu Menang.'
      } else if (computerMove === 'streak') {
        result = 'Seri.'
      }
    } else if (playerMove === 'air') {
      if (computerMove === 'streak') {
        result = 'Kamu Menang.'
      } else if (computerMove === 'air') {
        result = 'Seri.'
      } else if (computerMove === 'pohon') {
        result = 'Kamu Kalah.'
      }
      } else if (playerMove === 'pohon') {
      if (computerMove === 'pohon') {
        result = 'Seri.'
      } else if (computerMove === 'streak') {
        result = 'Kamu Kalah.'
      } else if (computerMove === 'air') {
        result = 'Kamu Menang.'
      }
    }
      
    if (result === 'Kamu Menang.') {
      gameScore.wins += 1
    } else if (result === 'Kamu Kalah.') {
      gameScore.losses += 1
    } else if (result === 'Seri.') {
      gameScore.ties += 1
    }
    
    localStorage.setItem('gameScore', JSON.stringify(gameScore));
    updateScore();
    document.querySelector('.result-js').innerHTML = `${result}`;
    document.querySelector('.you-n-computer-move-js').innerHTML = `Kamu <img src="img/icon/${playerMove}.png" class="icon" alt="${playerMove}"> VS <img src="img/icon/${computerMove}.png" class="icon" alt="${computerMove}"> Mr. Eko`;
    hasil()
    return result;
  }
  
  reset.addEventListener("click", () => {
    if( move.innerHTML == "") {
      alert("Kamu Belum pernah Memainkan game ini!")
    } else {
    resetScore()
    document.querySelector('.you-n-computer-move-js').innerHTML = ""
    document.querySelector('.result-js').innerHTML = ""
    alert("Skor Berhasil Direset")
    }
  })
  
  function resetScore() {
    gameScore.wins = 0;
    gameScore.losses = 0;
    gameScore.ties = 0
    localStorage.removeItem('gameScore');
    updateScore();
  }
  
  function updateScore() {
    document.querySelector('.score-js .scoremenang').innerHTML = `${gameScore.wins}`
    document.querySelector(".score-js .scorekalah").innerHTML = `${gameScore.losses}`
  }
      
      function pickComputerMove() {
        const randomMove = Math.random();
    
        let computerMove = '';
        
        if (randomMove <= 0.333) {
          computerMove = 'streak'
        } else if (randomMove <= 0.666 && randomMove >= 0.334) {
            computerMove = 'air'
        } else if (randomMove >= 0.667) {
            computerMove = 'pohon'
        }
        return computerMove;
      }
      
  function hasil() {
    let result = ""
    if( gameScore.wins == 10) {
      result = `Kamu Mengalahkan Mr. Eko! \n Kamu : ${gameScore.wins}, Mr. Eko : ${gameScore.losses}`
      resetScore()
      alert(result)
      document.querySelector('.you-n-computer-move-js').innerHTML = ""
      document.querySelector('.result-js').innerHTML = ""
    } else if( gameScore.losses == 10) {
      result = `Kamu Dikalahkan Oleh Mr. Eko! \n Kamu : ${gameScore.wins}, Mr. Eko : ${gameScore.losses}`
      resetScore()
      alert(result)
      document.querySelector('.you-n-computer-move-js').innerHTML = ""
      document.querySelector('.result-js').innerHTML = ""
    }
    return result
  }
  
  setTimeout(hasil, 500);