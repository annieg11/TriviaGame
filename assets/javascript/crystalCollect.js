var computerNum=Math.floor(Math.random()*102)+19;
var userSum=0;
var randomArray=[];
var userSelect=0;
var win=0;
var loss=0;
$(document).ready(function(){
     // We are generating random number as soon as we open the game.
    // storing it in the variable called computernum.
// This resets the game to new game,hence we call these variables again.
function newGame(){
   computerNum=Math.floor(Math.random()*102)+19;
   userSum=0;
   randomArray=[];
   userSelect=0;
   for(var i =0;i<4;i++){
    randomArray.push(Math.floor(Math.random()*12)+1);
    $('#randomnum').replaceWith('<div id= randomnum>'+computerNum+'</div>');
    $('#score').replaceWith('<div id=score> Your Total Score<br>'+userSum+'</div');
   };
};
    // After declaring a new array , we made a loop for the same.
    for(var i =0;i<4;i++){
      // Now we are pushing the randomly generated numbers into the random array which was initially empty.
      randomArray.push(Math.floor(Math.random()*12)+1);
    };
      // Replacing the div with id randomnum with div id Randomnum + computernum(random num generated),hence printing the random number on the browser.
    $('#randomnum').replaceWith('<div id= randomnum>'+computerNum+'</div>');
    // on click initalization.
  $( "button" ).click(function() {
    // After initializing the onclick button,the user selects any image and by this code we get the index of that image in the array.
    userSelect=randomArray[$('button').index(this)];
    // alert(userSelect);
    // we get the total score of the user.
    userSum =userSum + userSelect;
    //  replacing the div id score with div id score plus the total score of the user,hence its printing it on the browser.
    $('#score').replaceWith('<div id=score> Your Total Score<br>'+userSum+'</div');
    // to make win code.
    if(userSum==computerNum){
      alert("You Win!!");
      // we type these variables again to reset to new game without reseting the wins.
       /*computerNum=Math.floor(Math.random()*102)+19;
       userSum=0;
       randomArray=[];
       userSelect=0;
       for(var i =0;i<4;i++){
          randomArray.push(Math.floor(Math.random()*12)+1);
          $('#randomnum').replaceWith('<div id= randomnum>'+computerNum+'</div>');
          $('#score').replaceWith('<div id=score> Your Total Score<br>'+userSum+'</div');
        };*/
        newGame();
        // this increments wins
        win=win+1;
        // replacing the div id win with div id win plus the total wins by the user,hence its printing it on the browser.
        $('#win').replaceWith('<div id=win> Win: '+win+'</div>');
    };
    if(userSum>computerNum){
      alert("You Lost Buddy!! ");
      // we type these variables again to reset to new game without reseting the losses.
      //  computerNum=Math.floor(Math.random()*102)+19;
      //  userSum=0;
      //  randomArray=[];
      //  userSelect=0;
      // for(var i =0;i<4;i++){
      //   randomArray.push(Math.floor(Math.random()*12)+1);
      //   $('#randomnum').replaceWith('<div id= randomnum>'+computerNum+'</div>');
      //   $('#score').replaceWith('<div id=score> Your Total Score<br>'+userSum+'</div');
      // };
      newGame();
      // this increments losses
      loss=loss+1;
      // replacing the div id loss with div id loss plus the total losses by the user,hence its printing it on the browser.
      $('#loss').replaceWith('<div id=loss> Losses : '+loss+'</div>');
    };
  });
});

