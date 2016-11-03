// Business logic
// function Dice(sides) {
//   this.sides = sides;
// }
//
// Dice.prototype.roll = function() {
//   var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//   return randomNumber;
// }
// var dice = new Dice(6);

function Player()  {
  this.totalScore = 0;
  this.diceNumber = [];
}

Player.prototype.roll = function() {
  var result = 0
  do {
      result = Math.floor(Math.random() * 6) + 1;
      this.diceNumber.append(result);
  }
  while (result !== 1);
  //  || onclick="#stop");

  return this.diceNumber;
}

Player.prototype.playerScore = function() {
  var index = 0
  for(index =0; index <= this.diceNumber.length; i++) {

    if((this.diceNumber[i]) = 1) {
    turnScore = 0;
  } else {
    var i = 0;
    var turnScore = 0;
    for(i=0; i =< this.diceNumber.length; i++) {
      turnScore += parseInt(this.diceNumber[i]);
    }
  }
  this.totalScore += turnScore;
  return this.totalScore;
}

// user interface
$(document).ready(function() {
  $("#button").click(function(event) {

    event.preventDefault();

  var newDiceNumber = $("#placeholder").val();
  var newTotalScore = $("#blankscore").val();


  var newPlayer = new Player(newTotalScore, newDiceNumber);

$("#placeholder").text("regard");






    // function printNumber(number) {
    //   var placeholder = document.getElementById("placeholder");
    //   placeholder.innerHTML = number;
    // }
    // var button = document.getElementById("button");
    // button.onclick = function() {
    //   var result = dice.roll();
    //   printNumber(result);
    // };

    // newRolledNumber = 0;
    // newScoreArray = [];
    //
    // var currentScore = roundScore(newScoreArray);
    //
    // var newPlayer = new Player(currentScore);
    // console.log(currentScore);
    // $("#output h2").text(newPlayer.rollDie());
//   });
// });
