var scores, roundScore, activePlayer, gamePlay;
// alert('Please input a score range at the left corner of the board before playing the game...And you can reset predefined score.');

    init();

var toggleDice = document.querySelector(".btn-roll").addEventListener('click', function () {
    if (gamePlay) {
    dice = Math.floor(Math.random() * 6) + 1;
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = "block";
    diceDom.src = "assets/img/" + 'dice-' + dice + '.png';

    if (dice !== 0 && dice === 6) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    }
    }
    
});

function nextPlayer() {
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'block';
}

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlay) {
        scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //THIS SECTION IS FOR THE GAME TOAST WHERE POINTS ARE COMPARED AND COMMENTS ARE GIVEN
    //FOR COMBO GAMEPLAY
// var tost = document.querySelector('.toast');
// var firstPlayer = document.querySelector('#score-0').value;
// var secondPlayer = document.querySelector('#score-1').value;
// var toastText = document.querySelector('h4');

// tost.addEventListener('mouseover', function(){
//     tost.style.display = 'none';
// });

// if (firstPlayer >= secondPlayer){
//     toastText.textContent = 'Player 2 should try harder';
//     tost.style.display = 'block';
// }else if(secondPlayer <= firstPlayer){
//     toastText.textContent = 'Player 2 should make bigger moves';
//     tost.style.display = 'block';  
// }else if(secondPlayer >= firstPlayer){
//     toastText.textContent = 'Player 2 should be with flowing point';
//     tost.style.display = 'block';
// }else if(firstPlayer <= secondPlayer){
//     toastText.textContent = 'Player 2 is leading the point point';
//     tost.style.display = 'block';
// }else{
//     toastText.textContent = 'Player 2 should work harder';
//     tost.style.display = 'block';
// }
//COMBO GAMEPLAY ENDS HERE

    var inputText = document.getElementById('preScore').value;
    if(scores[activePlayer] >= inputText){
        var sfxSound = new Audio();
        sfxSound.src = 'assets/sfx/applause.mp3';
        sfxSound.play();
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlay = false;

    }else{
        nextPlayer();
    }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlay = true;

    document.querySelector(".dice").style.display = "none";
    // document.querySelector('.toast').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    // var audioStart = new Audio();
    // audioStart.src = 'assets/sfx/startaudio.mp3';
    // audioStart.play();
}

