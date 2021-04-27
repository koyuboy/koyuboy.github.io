var bluetooth = new Audio("sounds/bluetooth.mp3")

var fireInTheHole = new Audio("sounds/fire-in-the-hole.mp3")
var seytanGulusu = new Audio("sounds/seytan-gulusu-sesi.mp3");

var suphe = new Audio("sounds/suphe.mp3")
var akasyaduragı = new Audio("sounds/akasyaduragı.mp3")
var patlama = new Audio("sounds/patlama.mp3")
var saak = new Audio("sounds/saak.mp3")
var sasirma = new Audio("sounds/sasirma.mp3")

var nokiaArabic = new Audio("sounds/nokia-arabic.mp3")

var allahKurtarsin = new Audio("sounds/allah-kurtarsin-kardesim-mustafa-tilki.mp3")
var senZavallisin = new Audio("sounds/sen-zavalli-bir-adamsin.mp3")

var sounds = [suphe,akasyaduragı,senZavallisin,patlama,saak,sasirma];
var soundIdx = 0;

function playLaugh(sound) {
    sound.play();
  }

function playSoundsArray(){
    sounds[soundIdx].play();
    soundIdx++;
    if (soundIdx == sounds.length){
        soundIdx=0;
    }
}
  
  


function modeSelectMenu(clear){
    
    if(clear==1){
        document.getElementById("modeSelect").innerHTML="";
    }else{
    document.getElementById("modeSelect").innerHTML= "Select Difficulty</br><button id='easy' class= 'levelButtons' onclick='startEasyGame()'>Easy</button> <button id='medium' class= 'levelButtons' onclick='startMediumGame()'>Medium</button> <button id='hard' class= 'levelButtons' onclick='startHardGame()'>Hard</button> <button id='extraHard' class= 'levelButtons' onclick='startExtraHardGame()'>Extra Hard</button> <button id='hell' class= 'levelButtons' onclick='startHellGame()'>HELL</button>"
    
    if(score > 5){
        playLaugh(nokiaArabic)
    }else if(score == 0){
        playLaugh(allahKurtarsin)
    }
    else{
        playLaugh(bluetooth)
    }
    
    document.body.style.backgroundImage = "";
    }
}
modeSelectMenu(0)




  
/* Global Variables */
var targetColor;
var score;
var colors;
var size;

/*For timer*/
var status = true;
const startMin=1;
/*let time = startMin * 59;*/
var time;
const countDownElement = document.getElementById("countDown");
/*var x = setInterval(updateCountDown, 1000); /*
/* 1 saniye bir güncelle*/
var timer;

function updateCountDown(){

    /*const minutes = Math.floor(time/60);*/
    let seconds = time;
    
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("gameInfo").style.border = "thick solid #0000FF";
    document.getElementById("gameInfo").style.borderRadius = "25px";
    /*document.getElementById("gameInfo").style.backgroundColor = colors[targetColor];*/
    document.getElementById("gameInfo").style.backgroundColor = "white";
    trgt = "<div style='background-color:" + colors[targetColor] + ";width: 200px;height:100px;border-radius: 25px;margin-left:10px;'></div>";
    targetColorText = "<ul style='list-style-type: none;overflow: hidden;'><li style='float: left'>Target Color = </li><li style='float: left'>" + trgt + "</li></ul>";
    text = "Time= "+ seconds+ "</br>" + "Score= " + score + "</br>" + targetColorText + "</br>";
    countDownElement.innerHTML =  text;
    
    time--;
    if(seconds==00){

        clearInterval(timer);

        document.getElementById("game").innerHTML="";
        document.getElementById("gameInfo").style.backgroundColor = "white";
        text = "Time is Out!" + "</br>" + "Your score is " + score
        countDownElement.innerHTML= text;
        modeSelectMenu(0)
        
        /*
        time=startMin;
        x=setInterval(updateCountDown, 1000);
        */
    } 
    
}

function restartTimer(){
    clearInterval(timer);
    time=60
    timer = setInterval(updateCountDown, 1000);
}


function generateColors(size) {
    var arr = [];

    for(i = 0; i < (size*size); i++) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        arr[i] = "rgb("+r+", "+g+", "+b+")";
    }

    return arr;
}

function generateButtons(){
    var htmlText="";   
    for(i=0;i<size;i++){
        for(j=0;j<size;j++){
           htmlText+= "<button class=color onclick=selectFunc(this)></button>"
        }
        htmlText+="</br>"
    } 
    document.getElementById("game").innerHTML= htmlText;
}

function shuffleAndSelectTarget(){
    targetColor = Math.floor(Math.random()*(size*size)); /* 0 to 8 */
    colors = generateColors(size);
    var buttons = document.querySelectorAll(".color");
    for(i = 0; i < (size*size); i++) {
        buttons[i].style.backgroundColor = colors[i];
    }
}

function selectFunc(element) {
    if(element.style.backgroundColor == colors[targetColor]){
        score++;

        shuffleAndSelectTarget()
        
    }else{
        playSoundsArray()
      
    }
  }

function startEasyGame() {
    score=0;
    size=3;
    modeSelectMenu(1)
    restartTimer()

    
    generateButtons()
    
   /* var x =document.getElementsById("modeSelect");
    x.style.display="none";*/


    shuffleAndSelectTarget()

    

    /*displayedColor.textContent = colors[correctColor].toUpperCase();*/

}

function startMediumGame() {
    score=0;
    size=4;

    modeSelectMenu(1)
    restartTimer()

    generateButtons()
    shuffleAndSelectTarget()
}

function startHardGame() {
    score=0;
    size=5;

    modeSelectMenu(1)
    restartTimer()

    generateButtons()
    shuffleAndSelectTarget()
}

function startExtraHardGame() {
    score=0;
    size=10;

    modeSelectMenu(1)
    restartTimer()

    generateButtons()
    shuffleAndSelectTarget()
}

function startHellGame() {
    
    score=0;
    size=20;


    playLaugh(fireInTheHole);


    setTimeout(function() {
        playLaugh(seytanGulusu);
        document.body.style.backgroundImage = "url('hell.jpg')";
        //document.body.style.backgroundRepeat = "no-repeat";
        
    }, 2000); 
   
    
        
    
    

    modeSelectMenu(1)
    
    setTimeout(function() {
        
        restartTimer()
        
        
    }, 2000); 
    
    

    generateButtons()
    shuffleAndSelectTarget()
}




