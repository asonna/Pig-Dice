// Business logic

function Player(name)  {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
}

Player.prototype.rollPlay = function() {
  var result = Math.floor(Math.random() * 6) + 1;

  if(result === 1) {
    this.turnScore = 0;
} else {
    this.turnScore += result;
  }
  return result;
}

Player.prototype.holdStop = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  return this.totalScore;
}


Player.prototype.name = function() {
  prompt("Player 1, please enter your name:");
  }
  this.turnScore = this.turnScore + roll;
}




// user interface

$(document).ready(function() {
  var newPlayer = new Player();

  $("#start1").click(function(event) {
    event.preventDefault();

  var newTurnScore = $("#turnscoring").val();

  $("#turnscoring").empty();
  $("#placeholder").text(newPlayer.rollPlay())
  $("#turnscoring").text(newPlayer.turnScore);

  });

  $("#stop1").click(function(event) {
    event.preventDefault();

  var newTotalScore = $("#blankscore1").val();

  $("#placeholder").empty();
  $("#turnscoring").empty();
  $("#blankScore1").text(newPlayer.holdStop());

  });

  var newPlayer = new Player();

  $("#start2").click(function(event) {
    event.preventDefault();

  var newTurnScore = $("#turnscoring").val();

  $("#turnscoring").empty();
  $("#placeholder").text(newPlayer.rollPlay())
  $("#turnscoring").text(newPlayer.turnScore);

  });

  $("#stop2").click(function(event) {
    event.preventDefault();

  var newTotalScore = $("#blankscore2").val();

  $("#placeholder").empty();
  $("#turnscoring").empty();
  $("#blankScore2").text(newPlayer.holdStop());

  });


});
