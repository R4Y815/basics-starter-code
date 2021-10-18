var randomNumber = function () {
  var randomDecimal = Math.random() * 3; // Math.random() --> 0 --- <1  0.1 , 0.2121241, 0.999999999999 float 2.09999
  var randomInteger = Math.floor(randomDecimal); //0,1,2
  return randomInteger + 1; // 1,2,3
};

// read random Number to output  random GameHand
var readSecretWordNmbr = function (secretWordIndex) {
  var secretWord = "";
  if (secretWordIndex == 1) {
    secretWord = "banana";
  }
  if (secretWordIndex == 2) {
    secretWord = "chisel";
  }
  if (secretWordIndex == 3) {
    secretWord = "faucet";
  }
  return secretWord;
};

var random1or2 = function () {
  var randomDecimal = Math.random() * 2; // Math.random() --> 0 --- <1  0.1 , 0.2121241, 0.999999999999 float 2.09999
  var randomInteger = Math.floor(randomDecimal); //0,1
  return randomInteger + 1; // 1or2
};

var random2or3 = function () {
  var randomDecimal = Math.random() * 2; // Math.random() --> 0 --- <1  0.1 , 0.2121241, 0.999999999999 float 2.09999
  var randomInteger = Math.floor(randomDecimal); //0,1
  return randomInteger + 2; // 2or3
};

var random1or3 = function () {
  var randomDecimal = Math.random() * 2; // Math.random() --> 0 --- <1  0.1 , 0.2121241, 0.999999999999 float 2.09999
  var randomInteger = Math.floor(randomDecimal); //0,1
  var rdm1or3 = "";
  if (randomInteger + 1 == 1) {
    rdm1or3 = 1;
  }
  if (randomInteger + 1 == 2) {
    rdm1or3 = 3;
  }
  return rdm1or3;
};

var scoreBanana = 0;
var scoreChisel = 0;
var scoreFaucet = 0;
var gameNumber = 0;
var memoryPrevSecretWord = "empty";
var randomSecretWordIndex = randomNumber();
var randomSecretWord = readSecretWordNmbr(randomSecretWordIndex);

var main = function (input) {
  gameNumber = gameNumber + 1;
  console.log("##### GAME NUMBER #####");
  console.log(gameNumber);

  console.log("randomSecretWord 1st Game/PrevGame = ");
  console.log(randomSecretWord);

  if (memoryPrevSecretWord == 1) {
    randomSecretWord = readSecretWordNmbr(random2or3());
  }

  if (memoryPrevSecretWord == 2) {
    randomSecretWord = readSecretWordNmbr(random1or3());
  }

  if (memoryPrevSecretWord == 3) {
    randomSecretWord = readSecretWordNmbr(random1or2());
  }

  console.log("randomSecretWord Corrected Pick = ");
  console.log(randomSecretWord);

  /*   //======================================
  // INPUT CONTROL FLOW TEST BLOC;
  if (gameNumber == 2) {
    randomSecretWord = "banana";
  }
  if (gameNumber == 3) {
    randomSecretWord = "chisel";
  }
  if (gameNumber == 4) {
    randomSecretWord = "faucet";
  }
  if (gameNumber == 6) {
    randomSecretWord = "faucet";
  }
  //====================================== */

  if (
    input.toLowerCase() == randomSecretWord &&
    input.toLowerCase() == "banana"
  ) {
    scoreBanana = scoreBanana + 1;
  }
  console.log("** ScoreBanana **");
  console.log(scoreBanana);
  if (
    input.toLowerCase() == randomSecretWord &&
    input.toLowerCase() == "chisel"
  ) {
    scoreChisel = scoreChisel + 1;
  }
  console.log("** scoreChisel **");
  console.log(scoreChisel);
  if (
    input.toLowerCase() == randomSecretWord &&
    input.toLowerCase() == "faucet"
  ) {
    scoreFaucet = scoreFaucet + 1;
  }
  console.log("** scoreFaucet **");
  console.log(scoreFaucet);

  var sumScore = scoreBanana + scoreChisel + scoreFaucet;
  var scoreDiff = 2 - sumScore;

  //need message for when the person doesn't win 2wice in a row.
  var TwoWrongGuesses = `Wrong guess<br> Your guess was ${input}.<br> Secret Word: ${randomSecretWord}.<br> You need ${scoreDiff}  correct guesses in a row to win. Try again.  `;

  var myOutputValue = TwoWrongGuesses;

  var correct1stGuess = `Correct guess... <br><br> Your guess was ${input}.<br> Secret Word: ${randomSecretWord}.<br><br>  You need ${scoreDiff} more correct guess to win. `;

  var correct2wiceInArow = ` YOU WIN!<br><br>You have guessed the secret word twice in a roll! <br><br> Your guess for the 2nd word was ${input}.<br> Secret Word: ${randomSecretWord}.<br> `;

  var gameOver = `You have already beaten the game in this round. <br><br>Please refresh the webpage to restart the game. `;

  if (input.toLowerCase() == randomSecretWord && sumScore == 1) {
    myOutputValue = correct1stGuess;
  }

  if (sumScore == 2 && input.toLowerCase() == randomSecretWord) {
    myOutputValue = correct2wiceInArow;
  }

  if (
    (sumScore > 2 && input.toLowerCase() == randomSecretWord) ||
    (sumScore >= 2 && input.toLowerCase() != randomSecretWord)
  ) {
    myOutputValue = gameOver;
  }

  memoryPrevSecretWord = randomSecretWordIndex;
  console.log("previous Secret Word for NEXt Round = ");
  console.log(readSecretWordNmbr(memoryPrevSecretWord));
  return myOutputValue;
};
