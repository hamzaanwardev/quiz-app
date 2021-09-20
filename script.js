const quizData = [
    {
        question: 'Which language runs in a web browser?',
        a: "Java",
        b: "C",
        c: "JavaScript",
        d: "Python",
        correct: "c",
    },
    {
        question: "What does CSS stands For??",
        a: "Central Style Sheet",
        b: "Cascading Style Sheet",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stands For???",
        a: "HyperText Markup Language",
        b: "HyperText Markdown Language",
        c: "Hyperloop Machine language",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "a",
    },
    {
        question: "What year was JavaScript Launched?",
        a: "1996",
        b:"1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


const currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
}
