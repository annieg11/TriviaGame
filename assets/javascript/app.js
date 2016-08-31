
$(document).ready(function() {
  // to make an array which stores questions,its choices and correct answer index.
  var questions = [{
      question: 'Who invented the BALLPOINT PEN?',
      choices: ['Biro Brothers', 'Waterman Brothers', ' Bicc Brothers', 'Write Brothers'],
      correctAnswer: 0
    }, {
      question: 'Which scientist discovered the radioactive element radium?',
      choices: ['Isaac Newton', 'Albert Einstein', 'Benjamin Franklin', 'Marie Curie'],
      correctAnswer: 3
    }, {
      question: 'What Galileo invented?',
      choices: ['Barometer', 'Pendulum clock', 'Microscope', 'Telescope'],
      correctAnswer: 3
    }, {
      question: 'What Benjamin Franklin invented?',
      choices: ['Bifocal spectacles', 'Radio', 'Barometer', 'Hygrometer'],
      correctAnswer: 0
    }, {
      question: 'What Elisha Otis invented?',
      choices: ['The brake used in modern elevators', 'Jet Engine', 'Turbine', 'Hydraulic Crane'],
      correctAnswer: 0
    }]
    // alert(questions.length);
  var currentQuestion = 0;
  var correctAnswers = 0;
  var count = 0;
  var counter;
  // Setting timer function to call time remaining and decrease count by 1sec.
  function timer() {
    $(".timeleft").text("Time Remaining: " + count + " secs");
    count--;
    if (count === 0) {
      // if count is 0, then clear the time interval.
      clearInterval(counter);
      // We are getting the correct answer text from this variable.
      var temp = questions[currentQuestion].correctAnswer;
      // If user input is not defined,then it flashes this message in the message div.
      $(".Message").text("Time up!!" + "Correct Answer is " + questions[currentQuestion].choices[temp]);
      // We move on to the next question.
      currentQuestion++;
      // We hide the qestions,choicelist and time remaining to show our messge text and then after 2 sec time interval,we show them back.
      hideContentArea();
    }
  }

  function showQuestionArea() {
    $(".Message").hide();
    // if at the current question then we call display the question function which displays the current question and its choicelist.
    if (currentQuestion < questions.length) {
      displayCurrentQuestion();
      // console.log(currentQuestion);
    } else {
      // if no more questions to ask then,it displays score.
      displayScore();
      // replacing 'start' div with 'start again?'.And showing it.
      $(".startButton").text("Start Again?");
      $(".startButton").show();
    }
  }
  // Restart the game,we hide result and initialize the variables to 0.
  function restart() {
    $(".result").hide();
    currentQuestion = 0;
    correctAnswers = 0;
  }
  // this displays the correct score out of number of questions asked.
  function displayScore() {
    $(".result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(".result").show();
  }
  // This displays the current question AND the choices.
  function displayCurrentQuestion() {
    // console.log("In display current Question");
    // Decrementing 30 secs by 1 sec till the time is up.Then it moves on to the next question.
    count = 30;
    counter = setInterval(timer, 1000);
    $(".timeleft").show();
    $(".question").show();
    $(".choiceList").show();
    var askquestion = questions[currentQuestion].question;
    // setting variables for the classes on the divs respectively.
    var questionClass = $(".question");
    var choiceList = $(".choiceList");
    // variable set to get the choices length for the current question asked.
    var numChoices = questions[currentQuestion].choices.length;
    // Set the questionClass text to the current question
    $(questionClass).text(askquestion);
    //console.log(askquestion);
    // To show choices of the question asked.
    var choice;
    for (i = 0; i < numChoices; i++) {
      choice = questions[currentQuestion].choices[i];
      // displaying the choices in the choicelist div.
      $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
  }
  // to hide the content area so that we can display the message  for 2sec,hence setting the time interval in this function.
  function hideContentArea() {
    $(".timeleft").hide();
    $(".question").hide();
    $(".choiceList").hide();
    $(".Message").show();
    $('.choiceList').empty();
    setTimeout(function() {
      showQuestionArea();
    }, 3000);
  }
  // To hide the timeleft div before the start of the game.
  $(".timeleft").hide();
  // On clicking next, display the next question
  $(this).find(".startButton").on("click", function() {
    // Hide start button
    $(".startButton").hide();
    // restart function is called here so that once the cycle finishes,on clicking the start button we could start again, the game.
    restart();
    // display function is called here so that we can display the question and its choices.
    displayCurrentQuestion();
    // end of on cilick function here.
  });
  // an on click function is used here to capture the user input to the radio button.
  $(this).find(".choiceList").on("click", function() {
    clearInterval(counter);
    var userinput = $("input[type='radio']:checked").val();
    // console.log("value=" + userinput);
    // console.log("correctAnswer=" + questions[currentQuestion].correctAnswer);
    //  loop to know if user input is correct or wrong,  hence displaying the message accordingly.
    if (userinput == questions[currentQuestion].correctAnswer) {
      correctAnswers++;
      $(".Message").text("Correct answer!!");
       $('<img src="assets/images/happy.jpg">').appendTo(".Message");
    } else {
      var temp = questions[currentQuestion].correctAnswer;
      $(".Message").text("Wrong answer!!" + "Correct Answer is " + questions[currentQuestion].choices[temp]);
      $("<img src='assets/images/betterluck.jpg'>").appendTo(".Message");
    };
    currentQuestion++;
    // clearing the content area.
    hideContentArea();
  });
}); 