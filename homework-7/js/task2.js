let startMessage = confirm('Do you want to play a game?')
let text = 'You did not become a billionaire, but can.';

let wholePrice = 0;

if (!startMessage) {
  alert(text);
} else {
  round(0);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function round(num){
  let price = 100 * (num + 1);

  const maxNumber = 8 + 4 * num;
  const number = randomNumber(0, maxNumber);

  const endGame = () => {
    price = 0;
    alert(`Thank you for your participation. Your prize is: ${price + wholePrice} $`);
    if(confirm('Do you want to play again?')){
      wholePrice = 0;
      round(0);
    }
  };

  for(let i = 3; i > 0; i--){
    const userNumber = prompt(
      `Choose a roulette pocket number from 0 to ${maxNumber} \nAttempts left: ${i} 
    \nTotal prize: ${wholePrice}$ \nPossible prize on current attempt: ${price}$`
    );

    if (parseInt(userNumber) === number){
      if(confirm(`Congratulation, you won! Your prize is: ${price} $. Do you want to continue?`)){
        wholePrice += price;
        return round(num + 1);
      } else {
        return endGame();
      }
    } else {
      price = price / 2;
    }
  }

  endGame();
}