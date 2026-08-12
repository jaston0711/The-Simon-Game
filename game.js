var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];

function nextSequence() {
   var randomNumber = Math.floor(Math.random()*4);
   var randomChosenColour = buttonColours[randomNumber];

   return [randomNumber, randomChosenColour];
};

$(".btn").on("click",function(){
   let [randomNumber, randomChosenColour] = nextSequence();
   var playAudio = new Audio("./sounds/" + randomChosenColour + ".mp3");
   playAudio.play();
   $("." + randomChosenColour).addClass(".flash");
});