const quizData = [
    {
        question: "What is the output of the following code?                cout << Hello, World!;",
        a: "Hello, World!",
        b: "hello, world!",
        c: "Hello World!",
        d: " World!",
        correct: "a",
    },
    {
        question: "Which of the following is a valid C++ data type?",
        a: "Integar",
        b: "string",
        c: "char",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "What is the correct way to declare a variable of type int in C++?",
        a: "int 1num;",
        b: "int num;",
        c: "num int;",
        d: "int num =;",
        correct: "b",
    },
    
    {
        question: " Which operator is used to add two numbers in C++?",
        a: " +",
        b: " -",
        c: " /",
        d: " *",
        correct: "a",
    },
    {
        question: "What is the correct way to write a single-line comment in C++?",
        a: "// This is a comment",
        b: "<!-- This is a comment -->",
        c: "# This is a comment",
        d: "/* This is a comment */",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})