const quizData = [
  {
    question: "Who is a current member of the Shichibuka?",
    a: "Marshal D.Teach",
    b: "Buggy",
    c: "Trafalgar Law",
    d: "Gekko Moriah",
    correct: "b",
  },
  {
    question: "Which of these does NOT possess Observation Haki?",
    a: "Rebecca",
    b: "Sanji",
    c: "Shura",
    d: "Vergo",
    correct: "d",
  },
  {
    question: 'Who said "A bond of enmity is still a bond"?',
    a: "Marshal D.Teach",
    b: "Tom",
    c: "Trafalgar Law",
    d: "Gold D.Roger",
    correct: "c",
  },
  {
    question: "What is Franky's Real Name?",
    a: "Franky IS his real name",
    b: "Pluton",
    c: "Iceberg",
    d: "Cutty Flam",
    correct: "d",
  },
  {
    question: "Who is the mayor of Windmill Village?",
    a: "Woop Slap",
    b: "Lucky Roo",
    c: "Yosaku",
    d: "Genzo",
    correct: "a",
  },
];

const quizEl = document.getElementById("quiz");
const a_Text = document.getElementById("a_text");
const b_Text = document.getElementById("b_text");
const c_Text = document.getElementById("c_text");
const d_Text = document.getElementById("d_text");
const btnNext = document.getElementById("next");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_Text.innerText = currentQuizData.a;
  b_Text.innerText = currentQuizData.b;
  c_Text.innerText = currentQuizData.c;
  d_Text.innerText = currentQuizData.d;
}

btnNext.addEventListener("click", () => {
  //CHECK TO SEE THE ANSWER
  const answer = selectAnswer();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizEl.innerHTML = `<h2>You answerd ${score}/${quizData.length} Questions Correctly.</h2>

      <button onclick = "location.reload()">Reload</button>
      `;
    }
  }
});

function selectAnswer() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
