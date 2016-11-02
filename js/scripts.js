// Business logic
function Player(score)  {
  this.score = score;
}

Player.prototype.rollDie = function() {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function roundScore(scoreArray) {
  var addedScore = 0
  for(i=0; i<= scoreArray.length; i++) {
    addedScore += i;
  }
  return addedScore
}


function keepScore()  {
  rolledNumber = 0;
  scoreArray = [];
  for (i=0; i<1000; i++) {

    if (i != 1) {
    scoreArray.push(rolledNumber);
    } else {
    scoreArray = [];
    }
  }
}


// User interface logic
$(document).ready(function() {
  $('#roll').click(function(event) {

    event.preventDefault();

    newRolledNumber = 0;
    newScoreArray = [];

    var currentScore = roundScore(newScoreArray);

    var newPlayer = new Player(currentScore);
    console.log(currentScore);
    $("#output h2").text(newPlayer.rollDie());
  });
});
