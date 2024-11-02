// first set questions
const questions = [
    {
        question: "Which Variable Have Global Scope In JS? ",
        answers: [
            { text: "let", correct: false },
            { text: "const", correct: false },
            { text: "var", correct: true },
            { text: "function", correct: false },
        ]
    },
    {
        question: "What does AJAX stand for?",
        answers: [
            { text: "Asynchronous Java and XML", correct: false },
            { text: "Automated JavaScript and XML", correct: false },
            { text: "Asynchronous JavaScript and XML", correct: true },
            { text: "Asynchronous JSON and XML", correct: false },
        ]
    },
    {
        question: "Which One Is Non-Primitive Data Type In JS?",
        answers: [
            { text: "Boolean", correct: false },
            { text: "Object", correct: true },
            { text: "String", correct: false },
            { text: "Number", correct: false },
        ]
    },
    {
        question: "What is boilerplate code in programming?",
        answers: [
            { text: "Pseudo Code", correct: false },
            { text: "Debugging Code", correct: false },
            { text: "Framework Code", correct: false },
            { text: "Basic Code", correct: true },
        ]
    },
    {
        question: "Correct Syntax Of ternary operator In Javascript?",
        answers: [
            { text: "condition ? true output : false output", correct: true},
            { text: "condition && true output || false output", correct: false },
            { text: "if (condition) { true output } else { false output }", correct: false },
            { text: "condition : true output ? false output", correct: false },
        ]
    },
    {
        question: "Which two loops are unique to JavaScript?",
        answers: [
            { text: "While & Do-While", correct: false},
            { text: "For & While", correct: false },
            { text: "For-Of & For-In", correct: true },
            { text: "Switch & For", correct: false },
        ]
    },
    {
        question: "What is the special type of string in JavaScript called, used with backticks (`)",
        answers: [
            { text: "Template Literals", correct: true},
            { text: "String Interpolation", correct: false },
            { text: "String Concatenation", correct: false},
            { text: "Dynamic Strings", correct: false },
        ]
    },
    {
        question: "What is string interpolation in JavaScript?",
        answers: [
            { text: "To reverse a string", correct: false},
            { text: "To convert a string to uppercase", correct: false },
            { text: "To join two strings together", correct: false },
            { text: "To add variables or expressions within a string using ${expression}", correct: true },
        ]
    },
    {
        question: "Which data type is mutable in JavaScript?",
        answers: [
            { text: "String", correct: false},
            { text: "Number", correct: false },
            { text: "Array", correct: true },
            { text: "Boolean", correct: false },
        ]
    },
    {
        question: "Which property of an array is used to add, delete, and replace elements?",
        answers: [
            { text: "push()", correct: false},
            { text: "splice()", correct: true },
            { text: "slice()", correct: false },
            { text: "shift()", correct: false },
        ]
    },
    {
        question: "What does NaN stand for in JavaScript?",
        answers: [
            { text: "Not A Node", correct: false},
            { text: "Not A Null", correct: false },
            { text: "Not A Name", correct: false },
            { text: "Not A Number", correct: true },
        ]
    },
    {
        question: "What is the correct syntax for defining an object in JavaScript?",
        answers: [
            { text: "let obj = { key = value };", correct: false },
            { text: "let obj = ( key = value );", correct: false },
            { text: "let obj = { key: 'value' };", correct: true },
            { text: "let obj = [ key: value ];", correct: false },
        ]
    },
    {
        question: "In JavaScript, at what number do array indices start?",
        answers: [
            { text: "1", correct: false },
            { text: "0", correct: true },
            { text: "-1", correct: false },
            { text: "2", correct: false },
        ]
    },
    {
        question: "Which escape character is used to break a line in a string in JavaScript?",
        answers: [
            { text: "/t", correct: false },
            { text: "/b", correct: false },
            { text: "/r", correct: false },
            { text: "/n", correct: true },
        ]
    },
    {
        question: "What is the input in a JavaScript function called?",
        answers: [
            { text: "Parameter", correct: true},
            { text: "Argument", correct: false },
            { text: "Variable", correct: false },
            { text: "Constant", correct: false },
        ]
    },
    {
        question: "What are arrow functions in JavaScript?",
        answers: [
            { text: "A way to define an object", correct: false},
            { text: "A loop structure", correct: false },
            { text: "A compact way of writing a function", correct: true },
            { text: "A method to create classes", correct: false },
        ]
    },
    {
        question: "Are variables declared within a function in JavaScript local or global?",
        answers: [
            { text: "Local" , correct: true},
            { text: "Global", correct: false },
            { text: "Both", correct: false},
            { text: "Static", correct: false },
        ]
    },
    {
        question: "What are callback functions in JavaScript?",
        answers: [
            { text: "A function that executes once when the page loads", correct: false},
            { text: "A function that runs immediately after a loop", correct: false },
            { text: "A function that executes for each element in the array", correct: false },
            { text: "A function that is passed as an argument to another function to be executed later", correct: true },
        ]
    },
    {
        question: "Which code has priority in event handling?",
        answers: [
            { text: "Inline event handlers", correct: true},
            { text: "JavaScript event listeners", correct: false },
            { text: "CSS styles", correct: false },
            { text: "HTML attributes", correct: false },
        ]
    },
    {
        question: "What are special properties in JavaScript objects called?",
        answers: [
            { text: "Attributes", correct: false},
            { text: "Methods", correct: false },
            { text: "Prototype", correct: true },
            { text: "Functions", correct: false },
        ]
    },
    {
        question: "What is referred to as the blueprint of an object in JavaScript?",
        answers: [
            { text: "Function", correct: false},
            { text: "Module", correct: false },
            { text: "Prototype", correct: false },
            { text: "Class", correct: true },
        ]
    },
    {
        question: "Which method is used to handle errors in JavaScript?",
        answers: [
            { text: "catch() { console.log(err); }", correct: false },
            { text: "try { code } catch(err) { console.log(err); }", correct: true },
            { text: "try { code } except(err) { console.log(err); }", correct: false },
            { text: "errorHandler(err) { console.log(err); }", correct: false },
        ]
    },
    {
        question: "What is the purpose of setTimeout() in JavaScript?",
        answers: [
            { text: "To repeat a function at regular intervals", correct: false },
            { text: "To execute a function immediately", correct: false },
            { text: "To cancel a function execution", correct: false },
            { text: "To execute a function after a specified delay", correct: true },
        ]
    },
    {
        question: "What is nested callbacks in JavaScript commonly referred to as?",
        answers: [
            { text: "Callback hell", correct: true},
            { text: "Callback queue", correct: false },
            { text: "Callback chain", correct: false },
            { text: "Callback function", correct: false },
        ]
    },
    {
        question: "What is a common solution to callback hell in JavaScript?",
        answers: [
            { text: "Nested functions", correct: false},
            { text: "Anonymous functions", correct: false },
            { text: "Promises", correct: true },
            { text: "Inline callbacks", correct: false },
        ]
    },
    {
        question: "What is an IIFE in JavaScript?",
        answers: [
            { text: "A function that is defined but never executed", correct: false},
            { text: " A function that can be called multiple times", correct: false },
            { text: "A function that returns another function", correct: false},
            { text: "A function that is defined and immediately invoked after definition, only callable once", correct: true },
        ]
    },
    {
        question: "What does API stand for?",
        answers: [
            { text: "Application Protocol Interface", correct: false },
            { text: "Advanced Programming Interface", correct: false },
            { text: "Application Program Interaction", correct: false },
            { text: "Application Programming Interface", correct: true },
        ]
    },
    {
        question: "What is the purpose of the fetch API in JavaScript?",
        answers: [
            { text: "To retrieve data from a server asynchronously", correct: true},
            { text: "To manipulate local storage", correct: false },
            { text: "To create new DOM elements", correct: false },
            { text: "To send data to a server using a GET request", correct: false },
        ]
    },
    {
        question: "What does JSON stand for?",
        answers: [
            { text: "JavaScript Online Notation", correct: false},
            { text: "JavaScript Object Name", correct: false },
            { text: "JavaScript Object Notation", correct: true },
            { text: "Java Source Object Notation", correct: false },
        ]
    },
    {
        question: "What does the this keyword refer to in JavaScript?",
        answers: [
            { text: "The object from which a method was called" , correct: true},
            { text: "The global object", correct: false },
            { text: "The current function's parameter", correct: false},
            { text: "The first variable in a function", correct: false },
        ]
    },
];

// store changing elements in var
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// create var to store current ques index and score
let currentQuestionIndex = 0;
let score = 0;

// when we start a quiz index & score will be 0 & next button inner html
// will be next And it shows questions
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// create show questions function
function showQuestion(){
// This Function Reset the privious ques & ans
    resetState();
// create current question 
    let currentQuestion = questions[currentQuestionIndex];
// create/let ques no
    let questionNo = currentQuestionIndex + 1;
// question change krne k lye  inner html
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

// code to display answers

   currentQuestion.answers.forEach(answer => {
    // create answer buttons
    const button = document.createElement("button");
    // button ke andr answer or text show 
    button.innerHTML = answer.text;
    // btn of class dena
    button.classList.add("btn");
    // ans btn ko show krwana
    answerButtons.appendChild(button);
    //it will set correct btn
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    // click function
    button.addEventListener("click" , selectAnswer);
   });
}

// reset function if will remove all previous answers
function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// create answer function
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        // to increase sore too
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
       button.disabled = true ;
    });
    //adding next button
    nextButton.style.display = "block";
}
// define show score func
function showscore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} Out Of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
// handle next func
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showscore();
    }
}
// function for next button
nextButton.addEventListener("click" , ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
});
// start function
startQuiz();
