
$(document).ready(function () {


// to make an array which stores questions.
var questions =[{
 question:'Who invented the BALLPOINT PEN?',
 choices:['Biro Brothers', 'Waterman Brothers', ' Bicc Brothers','Write Brothers'],
 correctAnswer:0
},{
question:'Which scientist discovered the radioactive element radium?',
choices:['Isaac Newton', 'Albert Einstein', 'Benjamin Franklin', 'Marie Curie'],
correctAnswer:3
},{
question: 'What Galileo invented?',
choices:['Barometer', 'Pendulum clock', 'Microscope', 'Telescope'],
correctAnswer:3
},{
question:'What Benjamin Franklin invented?',
choices:['Bifocal spectacles','Radio','Barometer','Hygrometer'],
correctAnswer:0
},{
question:'What Elisha Otis invented?',
choices:['The brake used in modern elevators','Jet Engine','Turbine','Hydraulic Crane'],
correctAnswer:0
}];
 // alert(questions.length);
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;



  // This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var askquestion = questions[currentQuestion].question;
    var questionClass = $(document).find(".container > .question");
    var choiceList = $(document).find(".container > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    

    // Set the questionClass text to the current question
    $(questionClass).text(askquestion);
      console.log(askquestion);
    // Remove all current <li> elements (if any)
    // $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}
function displayScore() {
    $(document).find(".container > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".container > .result").show();
}
function hideScore() {
    $(document).find(".result").hide();
}
function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
    $(document).find(".timeleft").hide();
}
    // Display the first question  
    $(document).find(".timeleft").hide();
    // On clicking next, display the next question
    $(this).find(".startButton").on("click", function () {
          $(document).find(".startButton").hide();
          $(document).find(".timeleft").show();
          var count=30;
      function timer()
      {
        count--;
        $(document).find(".timeleft").text("Time Remaining: " + count + " secs");
          if (count === 0)
          {
         clearInterval(counter);
         //alert('Time Up!');
          }
    }  
    
       displayCurrentQuestion();
      var counter=setInterval(timer, 1000); 
           
    });
        if (!quizOver) {  
            $(this).find(".choiceList").on("click", function () {
              var userinput=$("input[type='radio']:checked").val();
                 console.log("value="+userinput);
                 console.log("correctAnswer="+questions[currentQuestion].correctAnswer); 
                if (userinput == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                    $(document).find(".timeleft").hide();
                     $(document).find(".question").hide();
                     $(document).find(".choiceList").hide();
                    $(document).find(".Message").text("Correct answer!!");
                    $(document).find(".Message").show();
                    setTimeout(fourSeconds,4000);
                      function fourSeconds(){
                     displayCurrentQuestion();

                   }
                    
                } else{
                  $(document).find(".timeleft").hide();
                  var temp=questions[currentQuestion].correctAnswer;
                  $(document).find(".Message").text("Wrong answer!!"+ "Correct Answer is "+ questions[currentQuestion].choices[temp]);
                   $(document).find(".question").hide();
                  $(document).find(".choiceList").hide();
                    
                };            
                if (currentQuestion < questions.length) {
                       displayCurrentQuestion();
                    console.log(currentQuestion);        
                    timer();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".starttButton").text("Start Again?");
                    quizOver = true;
                }
           });
           } 
         else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".startButton").text("Start");
            resetQuiz();
            time();
            displayCurrentQuestion();
            hideScore();
        };
     
    });






