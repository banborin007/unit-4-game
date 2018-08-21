// pseudo jutsu
// begin jQuery events...
$(document).ready(function(){

// at the start of game, generates a random number between 19-120
    var gameNum = Math.floor(Math.random() * 120) + 19;

// give randomNum box its number
    $("#randomNum").text(gameNum);
// variable for wins and losses
    var wins = 0;
    var losses = 0;
    var total = 0;
// four crystals will be displayed as buttons
// crystals will generate random number between 1 - 12
    var gem1 = Math.floor(Math.random() * 12) + 1;
    var gem2 = Math.floor(Math.random() * 12) + 1;
    var gem3 = Math.floor(Math.random() * 12) + 1;
    var gem4 = Math.floor(Math.random() * 12) + 1;

// when a player clicks on a crystal, a number is added
// add a function(s) for each crystal
    $("#blue_crystal").on("click", function(){
        total = total + gem1;
        $("#score").text(total);
    })
    $("#green_crystal").on("click", function(){
        total = total + gem2;
        $("#score").text(total);
    })
    $("#purple_crystal").on("click", function(){
        total = total + gem3;
        $("#score").text(total);
    })
    $("#red_crystal").on("click", function(){
        total = total + gem4;
        $("#score").text(total);
    })

// the numbers must be equal to the random number that is generated
    if (total === gameNum){
        wins++;
    }
    if (total > gameNum){
        losses++;
    }
// player gets +1 point to wins when their number equals randomNum
   
// player gets +1 point to losses when their number > randomNum
// Game restarts when play wins or loses
// When game restarts, the player should see a new random number
// When game restarts, a new value is generated for each crystal
    var html = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>";

    document.querySelector(".scores").innerHTML = html;
})