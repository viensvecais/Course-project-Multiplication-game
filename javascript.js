
var playing = false;
var score;
var timeLeft = 60;
var timer;
var valX;
var valY;


//If we click start/reset
document.getElementById("startreset").onclick = function(){ 
    //if we are playing
    if(playing == true){
        //reload page
        window.location.reload();
        //if we are not playing
    }else{
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        //show countdown box
        document.getElementById("timeremaining").style.display = "inline";
        //change button text to "reset"
        document.getElementById("startreset").innerHTML = "Reset game";
        //reduce time by 1 sec in loops
        timer = setInterval(function(){
            timeLeft--;
            document.getElementById("timeremainingvalue").innerHTML = timeLeft;
            //time left?
                //yes->continue
                //no ->gameover
            if(timeLeft<=0){
                document.getElementById("result").innerHTML = score;
                document.getElementById("gameover").style.display = "inline";
                clearInterval(timer);
            }
        }, 1000); 
    }
    //generate new question and multiple answers
    generateQA();
    //if we click on answer box
    document.getElementById("box1").onclick = checkAnswer
    document.getElementById("box2").onclick = checkAnswer
    document.getElementById("box3").onclick = checkAnswer
    document.getElementById("box4").onclick = checkAnswer
    //if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for 1sec
                //generate new Q&A
            //no
                //show try again box for 1sec

    
    
    
    function generateQA(){
    //answer for box1
    var val1 = Math.floor(Math.random()*11);
    var val2 = Math.floor(Math.random()*11);
    var answer1 = val1 * val2;
    document.getElementById("box1").innerHTML = answer1;

    //answer for box2
    var val3 = Math.floor(Math.random()*11);
    var val4 = Math.floor(Math.random()*11);
    var answer2 = val3 * val4;
    document.getElementById("box2").innerHTML = answer2;
    
    //answer for box3
    var val5 = Math.floor(Math.random()*11);
    var val6 = Math.floor(Math.random()*11);
    var answer3 = val5 * val6;
    document.getElementById("box3").innerHTML = answer3;
    
    //answer for box4
    var val7 = Math.floor(Math.random()*11);
    var val8 = Math.floor(Math.random()*11);
    var answer4 = val7 * val8;
    document.getElementById("box4").innerHTML = answer4;
    
    //question generated from random box answer
    var random1 = Math.floor(Math.random()*2)*2+1;
    var random2 = random1+1;
    valX = eval("val"+random1);
    valY = eval("val"+random2);
    
    var question = "";
    question = valX + " x " + valY;
    document.getElementById("question").innerHTML = question;
    }
    

    function checkAnswer(){
        if(playing==true){
            var valOfClick = document.getElementById(this.id).innerHTML;
            if(valOfClick == valX*valY){
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                document.getElementById("correct").style.display = "block";
                setTimeout(function(){
                    document.getElementById("correct").style.display = "none";
                }, 1000);
                generateQA();
            }else{
                document.getElementById("wrong").style.display = "block";
                setTimeout(function(){
                    document.getElementById("wrong").style.display = "none";
                }, 1000);
            }
        }
    }

    
}