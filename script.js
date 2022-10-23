'use strict';

let luckyNumber =Math.trunc(Math.random()*20)+1;
let score=20;
let high_score=0;
const displayMessage=message=>{
  document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click', () => {
const guessNumber= Number(document.querySelector('.guess').value);
  if (!guessNumber){
    displayMessage('No number...');

  }else if(guessNumber===luckyNumber){
    displayMessage('You Win')
    document.querySelector('body').style.backgroundColor='#60b346';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent=luckyNumber;
    if(score>high_score){
        high_score=score;
        document.querySelector('.highscore').textContent=high_score;
    }

  }else if(guessNumber!==luckyNumber){
    if(score>0){
      displayMessage(guessNumber>luckyNumber?'Too HIght Number':'Too low Number');
      score--;
      document.querySelector('.score').textContent=score;
   }else{
      displayMessage('You loose')
      document.querySelector('.score').textContent=0;
   }
  }
});

document.querySelector('.again').addEventListener('click',()=>{
    score=20;
    luckyNumber =Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=score;
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value = '';

})






