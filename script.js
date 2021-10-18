//4D string generator function. Placed globally so 4D number stays the same until webpage is reloaded, so players can keep trying to Submit

var random4Dstring = function () {
  var randomDecimal01 = Math.random() * 10;
  var randomDigit01 = Math.floor(randomDecimal01);
  var randomDecimal02 = Math.random() * 10;
  var randomDigit02 = Math.floor(randomDecimal02);
  var randomDecimal03 = Math.random() * 10;
  var randomDigit03 = Math.floor(randomDecimal03);
  var randomDecimal04 = Math.random() * 10;
  var randomDigit04 = Math.floor(randomDecimal04);
  var string4Digit =
    randomDigit01.toString() +
    randomDigit02.toString() +
    randomDigit03.toString() +
    randomDigit04.toString();
  return string4Digit; // ----- INPUT CONTROL POINT 1 OF 4
};

var random1to3 = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal); //
  return randomInteger + 1; // ----- INPUT CONTROL POINT 2 OF 4
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
var diceTotalScore = 0;
var fourDstring = random4Dstring();
var fourDnumber = Number(fourDstring);
var gameMode = 1; // gameMode = 1 -DiceRoll gameMode= 2 : 4D

var main = function (input) {
  gameNumber = gameNumber + 1;
  console.log("# GAME NUMBER #####");
  console.log(gameNumber);
  console.log("** GAME MODE NOW **");
  console.log(gameMode);
  console.log(">>> withInNmber in Current Round = ");
  console.log(withInNmber);
  var randomDiceRoll1 = 4; // ----- INPUT CONTROL POINT 3 OF 4
  var randomDiceRoll2 = 6; // ----- INPUT CONTROL POINT 4 OF 4
  console.log(">>>>>  Dices Rolled");
  console.log(randomDiceRoll1);
  console.log(randomDiceRoll2);

  var myOutputValue = `Wrong Input. Please try again`;

  var loseMsg = `GAME: Dice Within Range, 2 correct guesses in a roll to win.<br><br>YOU LOSE<----<br><br> To win, your guess must be within ${withInNmber} for either one of the 2 dice rolls twice in a roll. <br><br> Your guess: ${input}.<br>Your 2 dice rolls: ${randomDiceRoll1} & ${randomDiceRoll2}.<br><br>Please try again.`;

  var winMsg = `GAME: Dice Within Range, 2 correct guesses in a roll to win.<br><br> Correct Guess! You need 1 more correct guess to win this dice game. <br><br> Your guess: ${input} <br>is within ${withInNmber} of  your two dice rolls:<br> ${randomDiceRoll1} & ${randomDiceRoll2}. `;

  var bonusRoundInvite = `GAME: Dice Within Range, 2 correct guesses in a roll to win.<br><br>.You have won the dice game twice in a row.<br><br> >>>>>>>>> BONUS ROUND: Please guess a 4 digit number:`;

  var bonusRoundLose = `GAME: Guess 4D number <br><br>YOU LOSE !! <br><br> ${input} is not the 4D number <br> Try again.`;

  var bonusRoundWin = `GAME: Guess 4D number <br><br> YOU WIN!! <br><br>You guessed: ${input} <br> Actual 4D number:${fourDstring}<br><br> Next Game: <br>Dice Within Range, 2 correct guesses in a roll to win. `;

  var differenceRoll01 = Math.abs(input - randomDiceRoll1);
  var differenceRoll02 = Math.abs(input - randomDiceRoll2);

  // Conditions for winning the dice game. note that we use <= to also include the limits.
  if (
    (gameMode == 1 && input == randomDiceRoll1) ||
    (gameMode == 1 && input == randomDiceRoll2) ||
    (gameMode == 1 &&
      (differenceRoll01 <= withInNmber || differenceRoll02 <= withInNmber))
  ) {
    diceTotalScore = diceTotalScore + 1;
    myOutputValue = winMsg;
  }

  //When playing Dice Game , reset Dice Score Counter when players fail on second roll. Note that we will need to reset the total dice score to zero for eaach time the dice guess is wrong because we need 2 ceonsecutive correct guesses to win
  if (
    gameMode == 1 &&
    differenceRoll01 > withInNmber &&
    differenceRoll02 > withInNmber
  ) {
    diceTotalScore = 0;
    myOutputValue = loseMsg;
  }

  if (gameMode == 2 && input > fourDnumber && diceTotalScore >= 2) {
    myOutputValue = bonusRoundLose;
  }

  if (gameMode == 2 && input < fourDnumber && diceTotalScore >= 2) {
    myOutputValue = bonusRoundLose;
    differenceRoll01 = "not used";
    differenceRoll02 = "not used";
  }

  if (gameMode == 1 && diceTotalScore == 2) {
    myOutputValue = bonusRoundInvite;
    gameMode = 2;
  }

  var randomiseWithInNmber = random1to3();
  var nextFourDstring = random4Dstring();
  var nextFourDnumber = Number(nextFourDstring);

  if (gameMode == 2 && input == fourDnumber) {
    myOutputValue = bonusRoundWin;
    withInNmber = randomiseWithInNmber;
    diceTotalScore = 0;
    gameNumber = 0;
    gameMode = 1;
    fourDstring = nextFourDstring;
    fourDnumber = nextFourDnumber;
    differenceRoll01 = "not used";
    differenceRoll02 = "not used";
  }
  console.log("// Difference Dice Roll 1 and input");
  console.log(differenceRoll01);

  console.log("// Difference Dice Roll 2 and input");
  console.log(differenceRoll02);

  console.log(" ** DICE GAME TOTAL SCORE **");
  console.log(diceTotalScore);

  console.log(">>> withInNmber FOR NEXT Round = ");
  console.log(withInNmber);

  console.log(">>>> 4D String = ");
  console.log(fourDstring);

  console.log("** NEXT GAME MODE **");
  console.log(gameMode);

  console.log("______________________");
  console.log("______________________");
  return myOutputValue;
};
