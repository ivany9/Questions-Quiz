

/// var Declaration
var timerElement = document.querySelector(".timer-count");
var questionButton1 =document.getElementById("answer1"); 
var questionButton2 = document.getElementById("answer2");
var questionButton3 = document.getElementById("answer3");
var questionButton4 = document.getElementById("answer4");
var statusgame= document.querySelector(".status");
var runarray= document.querySelector(".qarray");
var resetButton = document.getElementById("play-again");
var screenhire = document.getElementById("hire-form");
var savebut=document.getElementById("save");
var winspan=document.querySelector(".win");
var playerspan=document.getElementById("fname2");




var timer;
var timerCount=50;
var arrayposition=0;
var an=0;
var quesnumber=0;
var qnumber=0;   
var qarray=["which keyword is used to declare a variable ?  ","which keyword is used to declare an array ? ","it is a variable type","which keyword is used to declare a loop ?"]
var respues1=["String","Number","Var","Boolean","Array","Function","Class","Div","Function","Div","Class","Boolean","type","for","input","value"]
var i=0;


// This function show the Screen trhough tow arrays one is questions, and the other one answers

    function screen(i,quesnumber)
      {
 
        if(quesnumber<qarray.length)
            {
              questionButton1.value=respues1[i];
              questionButton2.value=respues1[i+1];
              questionButton3.value=respues1[i+2];
              questionButton4.value=respues1[i+3];

              runarray.textContent=qarray[quesnumber];
              questions();
              screen2(quesnumber);
              }
 

        }
          

// Evaluation Function compare questions whit answers, and give 10 secs or quit 10 secs       
    function eval(an)
      {     
            if(((quesnumber==0)&&(an==3))||((quesnumber==1)&&(an==1))||((quesnumber==2)&&(an==4))||((quesnumber==3)&&(an==2)))
                { 
                    statusgame.textContent = "Correct ";
                    timerCount=timerCount+10;
                } 

            else
                { 
                  console.log("respuesta incorrecta");
                  statusgame.textContent = "Wrong  ";
                  timerCount=timerCount-10;
                 }
                 
          quesnumber++;
          i=i+4;
          screen(i,quesnumber);

      }

//send the answer through buttons, and have a function to stop the propagation, 

      function questions()
      {
        
        questionButton1.addEventListener("click", function(event)

         {
              event.stopImmediatePropagation();
              eval(1);  
         }); 

        questionButton2.addEventListener("click", function(event)

          {
              event.stopImmediatePropagation();
              eval(2);  
          });
     
         questionButton3.addEventListener("click", function(event)
           {
              event.stopImmediatePropagation();
              eval(3);  
           });

          questionButton4.addEventListener("click", function(event)
           {   
            event.stopImmediatePropagation();
            eval(4);  
           });

      }
//hide the second screen  
        function screen2(quesnumber)
          {
           if(quesnumber<4)
           screenhire.style.visibility="hidden";
          
 
          }



// main function

function init() {
  
  startTimer();
  screen(0,0);
  
}
      // set time, compare numbers of questions.
        function startTimer() {

          timer = setInterval(function() {
          timerCount--;
          timerElement.textContent = timerCount;
          if ((quesnumber==4) && timerCount > 0) {
        
              clearInterval(timer);
              screenhire.style.visibility="visible";
            }
    
    // Tests if time has run out
           if (timerCount <=0) {
              clearInterval(timer);  
              screenhire.style.visibility="visible";
              timerCount=0;
              timerElement.textContent = "GAME OVER";
             }
            }, 1000);
}

//store the information.
function render()
{

 var name=localStorage.getItem("name");
 var socre=localStorage.getItem("score");

  winspan.textContent=socre;
  playerspan.textContent=name;
 



}

//listener to save the user information

savebut.addEventListener("click",function(event){
  
  var formname=document.getElementById("fname").value;
  localStorage.setItem("name",formname);
  localStorage.setItem("score",timerCount);
  
  
  
  render();



});

init();    

 //change the vlues of the main variables to restart the game
 
   resetButton.addEventListener("click", function(event)
   {
    timerCount=50;
    i=0;
    quesnumber=0;
    statusgame.textContent = "   ";
    init();

});