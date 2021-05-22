const quizData = [
    {
        question: "Which is the most used programming language in 2021 ?",
        a: "Java",
        b: "Javascript",
        c: "C",
        d: "C++",
        correct: "Javascript"
    },
    {
        question: "Why should you slap your best friend ?",
        a: "Because, usko uska haq milna chahiye",
        b: "Nahi to wo seekhega kaise ?",
        c: "Mera dost, mai jo karu ?",
        d: "All of the above",
        correct: "All of the above"
    },
    {
        question: "What does JSON stands for ?",
        a: "It is the name of my neighbour",
        b: "I dont know the hell you're talking about",
        c: "Javascript object notation",
        d: "There is a typo, it is Jason Duerlo",
        correct: "Javascript object notation"
    },
    {
        question: "What does W3C stands for ?",
        a: "OOps, You mean WWF",
        b: "Thats the name of my street",
        c: "I dont do such things",
        d: "World Wide Web Consortium",
        correct: "World Wide Web Consortium"
    },
    {
        question: "Why you should take a bath ?",
        a: "Because, it stinks",
        b: "Because, 'Good Manners!'",
        c: "Because, Mummy ne bola hai",
        d: "Mai nahi naha raha",
        correct: "Because, Mummy ne bola hai"
    },
    {
        question: "Mobile kyu chalate ho itna ?",
        a: "kyoki, wo maan nahi rahi",
        b: "'Online classes' chal raha hai",
        c: "Phir wahi sawal",
        d: "All of the above",
        correct: "All of the above"
    }
];

let currentQuiz = 0;
let score = 0;


let question = document.getElementById("quiz-header");
let options = document.querySelectorAll("label")

let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d"); 
let button = document.getElementById("submit");

loadQuiz();

button.addEventListener("click", function(){
    if(currentQuiz < quizData.length-1){
        const choices = document.querySelectorAll("input[name='answer']");
        let choosen;
        for(const choice of choices){
            if(choice.checked){
                choosen = choice.nextElementSibling.innerText;
            }
        }
        if(choosen == quizData[currentQuiz].correct){
            score = score+1;
            button.style.backgroundColor = "rgb(0, 255, 0)";
            button.innerText = "Correct";
        }
        else{
            button.style.backgroundColor = "red";
            button.innerText = "Incorrect";
        }
        currentQuiz++;
        setTimeout(()=>{
            loadQuiz();
            button.style.backgroundColor = "blue";
            button.innerText = "Submit";
        }, 500);
        
    } else {
        score++;
        alert("The quiz has ended, your score is:  " + score);
        currentQuiz = 0;
    }
});


function loadQuiz(){
    let currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    options[0].innerText = currentQuizData.a;
    options[1].innerText = currentQuizData.b;
    options[2].innerText = currentQuizData.c;
    options[3].innerText = currentQuizData.d;
    for(let i=0; i<4; i++){
        options[i].previousElementSibling.checked = false;
    }
};

