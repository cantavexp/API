       const start = document.getElementById ("start");
       const quiz = document.getElementById("quiz");
       const question = document.getElementById("questions");
       const qImg = document.getElementById ("qImg");
       const chioceA = document.getElementById("A");
       const chioceB = document.getElementById ("B");
       const chioceC = document.getElementById ("C");
       const counter = document.getElementById("counter");
       const  timeGauge = document.getElementById("timeGauge");
       const progress = document.getElementById("progress");
       const scoreDiv = document.getElementById("scoreContainer");
       
      
       
      
         let questions = [
            {
           
        question : "What is HTML?",
        //    imgSrc : "img/html.png",
           
           chioceA : "correct",
           
           chioceB :"wrong",
           
           chioceC :"wrong",

           correct :"A"
       }
       
{
       question : "What is css?",
       imgSrc : "img/css.png",
       
       chioceA : "wrong",
       
       chioceB :"correct",
       
       chioceC : "wrong",

       correct :"B"
   }

   { question : "What is js?",
   imgSrc : "img/js.png",
   
   chioceA : "wrong",
   
   chioceB :"wrong",
   
   chioceC :"correct",

   correct :"C"

  }
];

const lastQuestion = questions, lenght - 1;
let runningQuestion = 0;

function renderQuestion(){
    let q = questions[runningQuestion];
    questions.innerHTML = "<p>"+ q.question + "</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    chioceA.innerHTML = q.choiceA;
    chioceB.innerHTML = q.choiceB;
    chioceC.innerHTML = q.choiceC;


    function renderProgress(){
        for(let qIndex = 0; qIndex <= lastQuestion;
        qIndex++){
         progress.innerHTML += "<div class= "prog" id="+ qIndex +"></div";
    
        }
    }  

    start.addEventListener("click",startQuiz);





let question = [];


let count = 0;
const questionTime = 10; 
const gaugeWidth = 150;
const guageUnit = gaugeWidth / questionTime;
let Timer;


}

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    Timer = setInterval(renderCounter,900); 
}





function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * guageUnit + "px";
        count++
    }
    else{
        count = 0;
    }

}







