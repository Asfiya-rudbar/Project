const quizData = [
    {
        question: "Which of the following is the correct way to declare a variable in Python?",
        a: "var x = 5",
        b: "let x = 5",
        c: "x = 5",
        d: "int x = 5",
        correct: "c",
    },
    {
        question: "What is the output of the following Python code?  print(3 + 4 * 2)",
        a: "14",
        b: "11",
        c: "7",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which data type is used to store a collection of items in Python?",
        a: "List",
        b: "Tuple",
        c: "Dictionary",
        d: "All of above",
        correct: "d",
    },
    
    {
        question: "Which of the following is a correct way to create a list in Python?",
        a: " list = (1, 2, 3)",
        b: " list = [1, 2, 3]",
        c: " list = 1, 2, 3",
        d: " list = {1, 2, 3}",
        correct: "b",
    },
    {
        question: "How do you define a function in Python?",
        a: "function: myFunction() {}",
        b: "def myFunction() {}",
        c: "function myFunction() {}",
        d: "def function_name():",
        correct: "d",
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