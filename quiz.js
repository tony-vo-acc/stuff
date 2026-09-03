const CHAPTER_INFO = {};

ALL_QUESTIONS.forEach(q => {
  if (!CHAPTER_INFO[q.chapter]) {
    CHAPTER_INFO[q.chapter] = {
      topic: q.topic,
      count: 0
    };
  }

  CHAPTER_INFO[q.chapter].count++;
});

const chapters = Object.keys(CHAPTER_INFO)
  .map(Number)
  .sort((a, b) => a - b);


let selectedChapters = new Set(chapters);
let selectedLength = "all";
let orderMode = "shuffled";

let session = [];
let idx = 0;
let score = 0;
let answers = [];
let answeredCurrent = false;

let currentOptionEls = [];


// ================================
// DOM ELEMENTS
// ================================

const landing = document.getElementById("landing");
const quizDiv = document.getElementById("quiz");
const resultsDiv = document.getElementById("results");

const chapterChecks = document.getElementById("chapterChecks");
const lengthSelect = document.getElementById("lengthSelect");


// ================================
// CHAPTER CHECKBOXES
// ================================

chapters.forEach(ch => {

  const id = "ch" + ch;

  const label = document.createElement("label");

  label.innerHTML = `
    <input
      type="checkbox"
      id="${id}"
      value="${ch}"
      checked
    >
    Ch. ${ch} - ${CHAPTER_INFO[ch].topic}
    (${CHAPTER_INFO[ch].count})
  `;

  chapterChecks.appendChild(label);
});


chapterChecks.addEventListener("change", () => {

  selectedChapters = new Set(
    [...chapterChecks.querySelectorAll("input:checked")]
      .map(c => Number(c.value))
  );

  if (selectedChapters.size === 0) {
    selectedChapters = new Set(chapters);
  }

  updateLengthOptions();
});


// ================================
// QUESTION LENGTH
// ================================

function updateLengthOptions() {

  const poolSize = ALL_QUESTIONS.filter(
    q => selectedChapters.has(q.chapter)
  ).length;

  lengthSelect.innerHTML = "";

  [10, 20, 40].forEach(n => {

    if (n >= poolSize) {
      return;
    }

    const option = document.createElement("option");

    option.value = n;
    option.textContent = n;

    lengthSelect.appendChild(option);
  });


  const allOption = document.createElement("option");

  allOption.value = "all";
  allOption.textContent = `All (${poolSize})`;

  lengthSelect.appendChild(allOption);

  lengthSelect.value = "all";
}


updateLengthOptions();


// ================================
// ORDER
// ================================

document
  .querySelectorAll('input[name="order"]')
  .forEach(radio => {

    radio.addEventListener("change", e => {
      orderMode = e.target.value;
    });

  });


// ================================
// SHUFFLE
// ================================

function shuffle(arr) {

  const a = [...arr];

  for (let i = a.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
}


// ================================
// BUILD QUIZ SESSION
// ================================

function buildSession() {

  let pool = ALL_QUESTIONS.filter(
    q => selectedChapters.has(q.chapter)
  );


  if (orderMode === "shuffled") {

    pool = shuffle(pool);

  } else {

    pool = [...pool].sort(
      (a, b) => a.id - b.id
    );

  }


  const len = lengthSelect.value;


  if (len !== "all") {
    pool = pool.slice(0, Number(len));
  }


  return pool;
}


// ================================
// START BUTTON
// ================================

document
  .getElementById("beginBtn")
  .addEventListener("click", () => {

    selectedLength = lengthSelect.value;

    session = buildSession();

    startQuiz();
  });


// ================================
// START QUIZ
// ================================

function startQuiz() {

  idx = 0;
  score = 0;
  answers = [];

  landing.classList.add("hidden");
  resultsDiv.classList.add("hidden");
  quizDiv.classList.remove("hidden");

  renderQuestion();
}


// ================================
// REMOVE A/B/C/D PREFIX
// ================================

function stripPrefix(s) {

  const match = /^[a-dA-D]\)\s*(.*)$/.exec(s);

  return match ? match[1] : s;
}


// ================================
// RENDER QUESTION
// ================================

function renderQuestion() {

  answeredCurrent = false;

  const q = session[idx];


  document.getElementById("progressLabel").textContent =
    `Question ${idx + 1} of ${session.length} — ` +
    `Ch. ${q.chapter}: ${q.topic} — ` +
    `Score: ${score}/${idx}`;


  document.getElementById("questionText").textContent =
    q.question;


  document.getElementById("feedback").textContent = "";


  const expEl = document.getElementById("explanation");

  expEl.textContent = "";
  expEl.classList.add("hidden");


  const optWrap = document.getElementById("optionsList");

  optWrap.innerHTML = "";


  // Shuffle answer choices
  const displayOptions = shuffle(
    q.options.map(stripPrefix)
  );


  currentOptionEls = [];


  displayOptions.forEach((text, i) => {

    const label = document.createElement("label");

    const hint = document.createElement("span");

    hint.className = "key-hint";
    hint.textContent = `${i + 1}.`;


    label.appendChild(hint);

    label.appendChild(
      document.createTextNode(text)
    );


    label.dataset.text = text;


    label.addEventListener("click", () => {
      handleAnswer(text, label);
    });


    optWrap.appendChild(label);

    currentOptionEls.push(label);
  });


  document
    .getElementById("nextBtn")
    .classList.add("hidden");
}


// ================================
// KEYBOARD CONTROLS
// ================================

document.addEventListener("keydown", e => {

  if (quizDiv.classList.contains("hidden")) {
    return;
  }


  const n = Number(e.key);


  // 1-4 selects answer
  if (n >= 1 && n <= 4) {

    const label = currentOptionEls[n - 1];


    if (label && !answeredCurrent) {

      handleAnswer(
        label.dataset.text,
        label
      );
    }

    return;
  }


  // Enter goes to next question
  if (
    e.key === "Enter" &&
    answeredCurrent
  ) {

    document
      .getElementById("nextBtn")
      .click();
  }

});


// ================================
// HANDLE ANSWER
// ================================

function handleAnswer(chosen, labelEl) {

  if (answeredCurrent) {
    return;
  }

  answeredCurrent = true;


  const q = session[idx];

  const correctText =
    stripPrefix(q.correct_answer);


  const isRight =
    chosen === correctText;


  if (isRight) {
    score++;
  }


  answers.push({
    question: q,
    chosen,
    isRight
  });


  // Mark correct/wrong answers
  currentOptionEls.forEach(label => {

    if (label.dataset.text === correctText) {

      label.classList.add("correct");

    } else if (label === labelEl) {

      label.classList.add("wrong");
    }

  });


  // Feedback
  document.getElementById("feedback").textContent =
    isRight
      ? "Correct."
      : `Incorrect. Correct answer: ${correctText}`;


  // Explanation
  const expEl =
    document.getElementById("explanation");

  expEl.textContent =
    "Why: " + q.explanation;

  expEl.classList.remove("hidden");


  // Update score
  document.getElementById("progressLabel").textContent =
    `Question ${idx + 1} of ${session.length} — ` +
    `Ch. ${q.chapter}: ${q.topic} — ` +
    `Score: ${score}/${idx + 1}`;


  // Show next button
  document
    .getElementById("nextBtn")
    .classList.remove("hidden");
}


// ================================
// NEXT QUESTION
// ================================

document
  .getElementById("nextBtn")
  .addEventListener("click", () => {

    if (idx < session.length - 1) {

      idx++;

      renderQuestion();

    } else {

      showResults();

    }

  });


// ================================
// RESULTS
// ================================

function showResults() {

  quizDiv.classList.add("hidden");
  resultsDiv.classList.remove("hidden");


  document.getElementById("resultScore").textContent =
    `Score: ${score}/${session.length} ` +
    `(${Math.round(score / session.length * 100)}%)`;


  const byChapter = {};


  answers.forEach(a => {

    const key =
      `Ch. ${a.question.chapter} - ${a.question.topic}`;


    if (!byChapter[key]) {

      byChapter[key] = {
        right: 0,
        total: 0
      };

    }


    byChapter[key].total++;


    if (a.isRight) {
      byChapter[key].right++;
    }

  });


  // ================================
  // CHAPTER BREAKDOWN
  // ================================

  const tbody =
    document.querySelector(
      "#breakdownTable tbody"
    );


  tbody.innerHTML = "";


  Object.entries(byChapter)
    .forEach(([label, value]) => {

      const tr =
        document.createElement("tr");


      tr.innerHTML = `
        <td>${label}</td>
        <td>${value.right}/${value.total}</td>
      `;


      tbody.appendChild(tr);

    });


  // ================================
  // AREAS TO IMPROVE
  // ================================

  const improveList =
    document.getElementById("improveList");


  improveList.innerHTML = "";


  const weak =
    Object.entries(byChapter)

      .map(([label, value]) => ({
        label,
        ...value,
        pct: value.right / value.total
      }))

      .filter(category => category.pct < 1)

      .sort(
        (a, b) => a.pct - b.pct
      );


  if (weak.length === 0) {

    improveList.textContent =
      "No weak spots — you got every category 100% correct.";

  } else {

    const ul =
      document.createElement("ul");


    weak.forEach(category => {

      const li =
        document.createElement("li");


      li.textContent =
        `${category.label} — ` +
        `${category.right}/${category.total} ` +
        `(${Math.round(category.pct * 100)}%)`;


      ul.appendChild(li);

    });


    improveList.appendChild(ul);
  }


  // ================================
  // MISSED QUESTIONS
  // ================================

  const missedList =
    document.getElementById("missedList");


  missedList.innerHTML = "";


  const missed =
    answers.filter(a => !a.isRight);


  if (missed.length === 0) {

    missedList.textContent =
      "None — all correct.";

  } else {

    missed.forEach(a => {

      const div =
        document.createElement("div");


      div.innerHTML = `
        <strong>${a.question.question}</strong>
        <br>
        Your answer: ${a.chosen}
        <br>
        Correct answer:
        ${stripPrefix(a.question.correct_answer)}
        <br>
        <em>Why: ${a.question.explanation}</em>
      `;


      missedList.appendChild(div);

    });

  }

}


// ================================
// RETRY
// ================================

document
  .getElementById("retryBtn")
  .addEventListener("click", () => {

    session =
      orderMode === "shuffled"
        ? shuffle(session)
        : session;


    startQuiz();
  });


// ================================
// NEW QUIZ
// ================================

document
  .getElementById("newBtn")
  .addEventListener("click", () => {

    resultsDiv.classList.add("hidden");

    landing.classList.remove("hidden");

    updateLengthOptions();

  });
