const quizData = [
    {
        question: "Which is not a Britney Spears song?",
        a: "Toxic",
        b: "Drive me crazy",
        c: "Circus",
        d: "Baby",
        correct: "d",
    },
    {
        question: "What artist sings the pop hit On the Floor?",
        a: "Ariana Grande",
        b: "Jennifer Lopez",
        c: "Janet Jackson",
        d: "Beyonce",
        correct: "b",
    },
    {
        question: "Which boy band sang the hit song Boyfriend?",
        a: "Big Time Rush",
        b: "One Direction",
        c: "Backstreet Boys",
        d: "NSYNC",
        correct: "a",
    },
    {
        question: "What was Lady Gaga's hit song in 2008?",
        a: "Poker Face",
        b: "Just Dance",
        c: "Bad Romance",
        d: "Born This Way",
        correct: "b",
    },


];

function greeting() {
    headerText.innerHTML = ""
    headerText.innerHTML = "Hey " + userName.value + ", enjoy a journey back to the iconic 2000s!"
}

const quiz= document.getElementById('quiz')
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