var wins=0;
var losses=0;
var currentScore=0;
var randomNumber=getRandomNumber(19,120);
var greenNumber=getGreenNumber(1,12);
var yellowNumber=getYellowNumber(1,12);
var blueNumber=getBlueNumber(1,12);
var purpleNumber=getPurpleNumber(1,12);

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getGreenNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getYellowNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getBlueNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getPurpleNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//display number
changeTarget();
function changeTarget(){
    $('#targetNumber').text(randomNumber);
}

//click to add
var greenGem=$('#green').on('click', function(){
    console.log(greenNumber);
    currentScore=currentScore+greenNumber
    $('#addUp').html(currentScore);
    checkScore();
})
var yellowGem=$('#yellow').on('click', function(){
    console.log(yellowNumber);
    currentScore=currentScore+yellowNumber
    $('#addUp').html(currentScore);
    checkScore();
})
var blueGem=$('#blue').on('click', function(){
    console.log(blueNumber);
    currentScore=currentScore+blueNumber
    $('#addUp').html(currentScore);
    checkScore();
})
var purpleGem=$('#purple').on('click', function(){
    console.log(purpleNumber);
    currentScore=currentScore+purpleNumber
    $('#addUp').html(currentScore);
    checkScore();
})

console.log(`the current number is ${currentScore}`);
// checkScore();

function checkScore(){
    if (currentScore==randomNumber){
        console.log('win');
        wins++;
        $('#winner').html(wins);
        $('#result').html('You win!');
        reset();
    } else if(currentScore>randomNumber){
        console.log('loss');
        losses++;
        $('#loser').html(losses);
        $('#result').html('You lose.');
        reset();
    }
}

function reset(){
    randomNumber=getRandomNumber(19,120);
    changeTarget();
    greenNumber=getGreenNumber(1,12);
    yellowNumber=getYellowNumber(1,12);
    blueNumber=getBlueNumber(1,12);
    purpleNumber=getPurpleNumber(1,12);
    currentScore=0;
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
}