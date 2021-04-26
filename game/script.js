function modeSelectMenu(clear){
    if(clear==1){
        document.getElementById("modeSelect").innerHTML="";
    }else{
    document.getElementById("modeSelect").innerHTML= "Select Difficulty</br><button id='easy' class= 'levelButtons' onclick='startEasyGame()'>easy</button> <button id='medium' class= 'levelButtons' onclick='startMediumGame()'>medium</button> <button id='hard' class= 'levelButtons' onclick='startHardGame()'>hard</button> "
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
    
    console.log(seconds);
    
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("gameInfo").style.border = "thick solid #0000FF";
    document.getElementById("gameInfo").style.backgroundColor = colors[targetColor];
    /*trgt = "<div style='background-color:" + colors[targetColor] + ";width: 250px;height:100px'></div>"*/
    text = "Time= "+ seconds+ "</br>" + "Score= " + score + "</br>" + "Target Color = " + colors[targetColor] + "</br>";
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




