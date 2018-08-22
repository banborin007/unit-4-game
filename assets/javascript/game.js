// pseudo jutsu
// begin jQuery events...
$(document).ready(function(){

// at the start of game, generates a random number between 19-120
    var gameNum = Math.floor(Math.random() * 120) + 19;

// give randomNum box its number... ".text is suppose to generate the number/text"
    $("#randomNum").text(gameNum);
// variable for wins and losses
    var wins = 0;
    var losses = 0;
    var total = 0;
// four crystals will be displayed as buttons or clickable options
// crystals will generate random number between 1 - 12
    var gem1 = Math.floor(Math.random() * 12) + 1;
    var gem2 = Math.floor(Math.random() * 12) + 1;
    var gem3 = Math.floor(Math.random() * 12) + 1;
    var gem4 = Math.floor(Math.random() * 12) + 1;

// player gets +1 point to wins when their "total" equals gameNum
// add condition to individual crystal... tried adding condition right after the functions and calling it 
// when we click the crystals... that didn't work. the current method works but it seems too redundant.
    function won(){
       console.log("yes!");
       wins++;
       $("#numWin").text(wins);
// wasn't sure if calling reset here was going to work because when placed after a condition, 
// it wasn't being executed... it works here for now.
       reset();
   }
// player gets +1 point to losses when their number > randomNum
// add condition to individual crystal
   function lose(){
       console.log("no!");
       losses++;
       $("#numLosses").text(losses);
       reset();
   }

// have to create reset function before conditions because it wasn't registering when it was placed at the end
   function reset(){
      gameNum=Math.floor(Math.random() * 120) +19;
      $("#randomNum").text(gameNum);
      gem1= Math.floor(Math.random() * 11)+1;
      gem2= Math.floor(Math.random() * 11)+1;
      gem3= Math.floor(Math.random() * 11)+1;
      gem4= Math.floor(Math.random() * 11)+1;
      total= 0;
      $("#score").text(total);
   }

// when a player clicks on a crystal, a number is added as an increment
// add a function(s) for each crystal
    $("#blue_crystal").on("click", function(){
        total = total + gem1;
        $("#score").text(total);
// condition statement for wins/losses
        if(total === gameNum){
            won();
        }
        else if (total > gameNum){
            lose();
        }
    })
    $("#green_crystal").on("click", function(){
        total = total + gem2;
        $("#score").text(total);

        if(total === gameNum){
            won();
        }
        else if (total > gameNum){
            lose();
        }
    })
    $("#purple_crystal").on("click", function(){
        total = total + gem3;
        $("#score").text(total);

        if(total === gameNum){
            won();
        }
        else if (total > gameNum){
            lose();
        }
    })
    $("#red_crystal").on("click", function(){
        total = total + gem4;
        $("#score").text(total);

        if(total === gameNum){
            won();
        }
        else if (total > gameNum){
            lose();
        }
    })
   
       
// Game restarts when play wins or loses...check!
// When game restarts, the player should see a new random number...check!
// When game restarts, a new value is generated for each crystal...check!
})