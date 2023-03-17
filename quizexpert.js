( function() {
    var chosenindex;
  gameplaying = true;
  function Question(question, option, correct) {
      this.question= question,
      this.option= option,
      this.correct= correct
  }
  Question.prototype.displayQuestions = function()
    {
      console.log(this.question);
      for (var i = 0; i < this.option.length; i++) {
        console.log(i + ': ' + this.option [i])
        
      }
    }
    Question.prototype.validateAnswers = function( ansvalue, callscore){
        var sc;
         if (ansvalue === this.correct) {
        console.log('correct answer');
        sc = callscore(true);
      }
      else {
        console.log('Wrong answer try again');
        sc = callscore(false);
      }
      this.displayScore(sc);
    }
    Question.prototype.displayScore = function(score){
        console.log("You current Score is " + score);
        console.log('__________________________________________________')
    }
  var q1 = new Question ('cutest cat in the world?', ['mano', 'else'], 0);
  var q2 = new Question ('Who was PM of Pak in 2019?', ['Ik', 'NS'], 0);
  var q3 = new Question ('Will you be ready till Eid?', ['not sure', 'Have to'], 1);
  var questions= [q1, q2, q3];
  function score() {
    var sc = 0;
    return function(correct){
    if (correct) {
        sc++;
    }
    return sc;
}
}
var keepScore = score();
  function nextQuestion(){
    chosenindex = Math.floor(Math.random()*questions.length);
    questions[chosenindex].displayQuestions();
    var answers = prompt('Please select your answer write number only');
    if (answers !== 'exit') {
        questions[chosenindex].validateAnswers(parseInt(answers), keepScore);
        nextQuestion();
    }
  }
  nextQuestion();
  })();
  