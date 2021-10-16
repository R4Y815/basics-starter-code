var random1to3 = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal); //
  return randomInteger + 1;
};

var diceRoll = function () {
  //no parameters means the function doesn't need any parameters to run
  var randomDecimal = Math.random() * 6; //(returns numbers including floats, from 0 till less than 6)
  var randomInteger = Math.floor(randomDecimal); // Math.floor rounds down highest floats of range down to nearest integer.
  var diceNumber = randomInteger + 1;
  // 1 is added only at the end because floor + random can return 0 as output, so we get integer ranges 0 - 5 first than add 1.
  return diceNumber;
};

var withInNmber = random1to3();
var gameNumber = 0;
var main = function (input) {
  gameNumber = gameNumber + 1;
  console.log("##### GAME NUMBER #####");
  console.log(gameNumber);
  console.log(">>> withInNmber in Current Round = ");
  console.log(withInNmber);
  var randomDiceRoll = diceRoll();
  console.log(">>>>>  Dice Rolled");
  console.log(randomDiceRoll);
  var myOutputValue = `For this round, you win if your guesss is within ${withInNmber} of the dice roll. <br><br> You guessed ${input}.<br><br>.You rolled a ${randomDiceRoll}. <br><br> >>>>> You lose, please try again. `;

  var winMsg = `For this round, you win if your guesss is within ${withInNmber} of the dice roll. <br><br> You guessed ${input}.<br><br>.You rolled a ${randomDiceRoll}. <br><br> >>>>> YOU WIN! <br><br>The difficulty will now be changed. `;

  if (
    input == randomDiceRoll ||
    (input > randomDiceRoll && input - randomDiceRoll <= withInNmber) ||
    (randomDiceRoll > input && randomDiceRoll - input <= withInNmber)
  ) {
    myOutputValue = winMsg;
    withInNmber = random1to3();
  }
  console.log(">>> withInNmber FOR NEXT Round = ");
  console.log(withInNmber);
  return myOutputValue;
};
