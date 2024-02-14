const documentCanvasClock = document.getElementById('canvasClock');
const testoDomanda = document.getElementById('documentDomanda');
const documentRisposta1 = document.getElementById('risposta1');
const documentRisposta2 = document.getElementById('risposta2');
const documentRisposta3 = document.getElementById('risposta3');
const documentRisposta4 = document.getElementById('risposta4');
// variabili globali 
let domandaCorrente = 0;
let intervallo;
Chart.defaults.global.tooltips.enabled = false;


const questions = [
  {
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {

    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {

    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {

    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {

    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {

    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {

    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {

    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {

    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let ctxClock = documentCanvasClock.getContext('2d');

// ctxClock.font = "bold 48px serif";
// ctxClock.strokeText("Hello world", 50, 100);

// Testo da centrare
// const text = 'Testo Centrato';

// // Calcolare le coordinate x e y per centrare il testo
// const textWidth = ctxClock.measureText(text).width;
// const x = (documentCanvasClock.width - textWidth) / 2;
// const y = documentCanvasClock.height / 2 + fontSize / 2; // Aggiungi fontSize / 2 per centrare verticalmente

// // Disegnare il testo centrato sul canvas
// ctxClock.fillText(text, x, y);


let myData = [0, 1];
let chart = new Chart(documentCanvasClock, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: myData,
      backgroundColor: ['#876191', '#00FFFF'],
      borderWidth: 0,
    }]
  },
  options: {
    maintainAspectRatio: false,
    hover: { mode: null },
    animation: { duration: 0, },
    cutoutPercentage: 75,
  }
});

const visualizzaDati = () => {
  testoDomanda.innerText = questions[domandaCorrente].question;
  documentRisposta1.innerText = questions[domandaCorrente].correct_answer;
  documentRisposta2.innerText = questions[domandaCorrente].incorrect_answers[0];
  documentRisposta3.innerText = questions[domandaCorrente].incorrect_answers[1];
  documentRisposta4.innerText = questions[domandaCorrente].incorrect_answers[2];
  if (questions[domandaCorrente].incorrect_answers.length == 1) {
    documentRisposta3.style.display = 'none';
    documentRisposta4.style.display = 'none';
  } else {
    documentRisposta3.style.display = 'inline';
    documentRisposta4.style.display = 'inline';
  }
};



const startTimer = (durataMillis) => {
  let index1 = 0;
  let index2 = 1;
  let milliSecondi = 0;
  const documentSecondi = document.getElementById("documentSecondi");


  intervallo = setInterval(function () {

    index1 += 1 / durataMillis * 100;
    index2 -= 1 / durataMillis * 100;

    let secondiRimanenti = Math.floor((durataMillis - milliSecondi) / 1000);
    documentSecondi.innerText = secondiRimanenti;

    milliSecondi += 100;

    if (milliSecondi >= durataMillis) {
      clearInterval(intervallo);
      domandaSuccessiva();
      return;
    }

    myData = [index1, index2];
    chart.data.datasets[0].data = myData;
    chart.update();
  }, 100);

};


const domandaSuccessiva = () => {
  clearInterval(intervallo);
  domandaCorrente++;
  if (domandaCorrente > questions.length - 1) {
    window.location.href = "risultato.html";
  }
  visualizzaDati();
  startTimer(30000);
};

function init() {
  visualizzaDati();


  startTimer(30000);

}
documentRisposta1.addEventListener("click", function () {
  domandaSuccessiva();
});
documentRisposta2.addEventListener("click", function () {
  domandaSuccessiva();
});
documentRisposta3.addEventListener("click", function () {
  domandaSuccessiva();
});
documentRisposta4.addEventListener("click", function () {
  domandaSuccessiva();
});
addEventListener("load", init);