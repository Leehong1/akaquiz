const quizData = [
    {
        question: "Between the Yayoi period (300 BC and 250 AD), what type of farming led to the development of more intricate social orders and more extensive settlements in Japan?",
        a: "Melon farming",
        b: "Rice farming",
        c: "Apple farming",
        d: "Banana farming",
        correct: "b",
    },
    {
        question: "What year did Tokyo become the capital of Japan?",
        a: "1869",
        b: "1969",
        c: "1769",
        d: "1669",
        correct: "a",x
    },
    {
        question: "Who directed Spirited Away and My Neighbor Totoro?",
        a: "A-1 Pictures",
        b: "Shinkai Makoto",
        c: "Hayao Miyazaki",
        d: "Mashiro",
        correct: "c",
    },
    {
        question: "Which currency is in use in Japan?",
        a: "USD",
        b: "Won",
        c: "Yuan",
        d: "Yen",
        correct: "d",
    },
];

const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionElement.textContent = currentQuizData.question;
    a_text.textContent = currentQuizData.a;
    b_text.textContent = currentQuizData.b;
    c_text.textContent = currentQuizData.c;
    d_text.textContent = currentQuizData.d;
}

function getSelected() {
    const answerElements = document.getElementsByName("answer");
    let answer = undefined;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.value;
        }
    });
    return answer;
}

function deselectAnswers() {
    const answerElements = document.getElementsByName("answer");
    answerElements.forEach((answerElement) => {
        answerElement.checked = false;
    });
}

submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        deselectAnswers();
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            scoreElement.textContent = `You answered ${score}/${quizData.length} questions correctly`;
            scoreElement.style.display = "block";
            submitButton.style.display = "none";
        }
    }
});

loadQuiz();
